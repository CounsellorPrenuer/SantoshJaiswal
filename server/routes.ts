import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { requireAuth, validateLogin } from "./auth";
import { 
  insertBlogSchema, 
  insertPackageSchema, 
  insertContactSchema,
  insertPaymentSchema,
  packageCategories,
  type PackageCategory 
} from "@shared/schema";
import Razorpay from "razorpay";
import crypto from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  
  app.post("/api/auth/login", async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      
      const isValid = await validateLogin(username, password);
      
      if (!isValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      req.session.userId = user.id;
      res.json({ message: "Login successful", user: { id: user.id, username: user.username } });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });
  
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logout successful" });
    });
  });
  
  app.get("/api/auth/session", async (req: Request, res: Response) => {
    if (!req.session.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    
    const user = await storage.getUser(req.session.userId);
    if (!user) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    
    res.json({ user: { id: user.id, username: user.username } });
  });
  
  app.get("/api/blogs", async (_req: Request, res: Response) => {
    try {
      const blogs = await storage.getAllBlogs();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blogs" });
    }
  });
  
  app.get("/api/blogs/:id", async (req: Request, res: Response) => {
    try {
      const blog = await storage.getBlog(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog" });
    }
  });
  
  app.post("/api/blogs", requireAuth, async (req: Request, res: Response) => {
    try {
      const validated = insertBlogSchema.parse(req.body);
      const blog = await storage.createBlog(validated);
      res.status(201).json(blog);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create blog" });
    }
  });
  
  app.put("/api/blogs/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const validated = insertBlogSchema.partial().parse(req.body);
      const blog = await storage.updateBlog(req.params.id, validated);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json(blog);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to update blog" });
    }
  });
  
  app.delete("/api/blogs/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const deleted = await storage.deleteBlog(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete blog" });
    }
  });
  
  app.get("/api/packages", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as PackageCategory | undefined;
      if (category && !packageCategories.includes(category as any)) {
        return res.status(400).json({ message: "Invalid category" });
      }
      const packages = await storage.getAllPackages(category);
      res.json(packages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch packages" });
    }
  });
  
  app.get("/api/packages/:id", async (req: Request, res: Response) => {
    try {
      const pkg = await storage.getPackage(req.params.id);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(pkg);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch package" });
    }
  });
  
  app.post("/api/packages", requireAuth, async (req: Request, res: Response) => {
    try {
      const validated = insertPackageSchema.parse(req.body);
      const pkg = await storage.createPackage(validated);
      res.status(201).json(pkg);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to create package" });
    }
  });
  
  app.put("/api/packages/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const validated = insertPackageSchema.partial().parse(req.body);
      const pkg = await storage.updatePackage(req.params.id, validated);
      if (!pkg) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json(pkg);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to update package" });
    }
  });
  
  app.delete("/api/packages/:id", requireAuth, async (req: Request, res: Response) => {
    try {
      const deleted = await storage.deletePackage(req.params.id);
      if (!deleted) {
        return res.status(404).json({ message: "Package not found" });
      }
      res.json({ message: "Package deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete package" });
    }
  });
  
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validated = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validated);
      
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=santosh.jw@gmail.com&su=${encodeURIComponent(`Contact from ${validated.name}`)}&body=${encodeURIComponent(`Name: ${validated.name}\nEmail: ${validated.email}\nPhone: ${validated.phone}\n\nMessage:\n${validated.message}`)}`;
      
      res.status(201).json({ contact, gmailUrl });
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Failed to submit contact form" });
    }
  });
  
  app.get("/api/contacts", requireAuth, async (_req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });
  
  app.post("/api/payments/order", async (req: Request, res: Response) => {
    try {
      const { amount, packageId, packageTitle } = req.body;
      
      if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        return res.status(500).json({ message: "Payment gateway not configured" });
      }
      
      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
      
      const order = await razorpay.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
          packageId: packageId || "",
          packageTitle,
        },
      });
      
      res.json(order);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to create order" });
    }
  });
  
  app.post("/api/payments/verify", async (req: Request, res: Response) => {
    try {
      const { 
        razorpay_order_id, 
        razorpay_payment_id, 
        razorpay_signature,
        payerName,
        email,
        phone,
        packageId,
        packageTitle,
        amount 
      } = req.body;
      
      if (!process.env.RAZORPAY_KEY_SECRET) {
        return res.status(500).json({ message: "Payment gateway not configured" });
      }
      
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body)
        .digest("hex");
      
      const isValid = expectedSignature === razorpay_signature;
      
      const payment = await storage.createPayment({
        payerName,
        email,
        phone,
        packageId: packageId || null,
        packageTitle,
        amount,
        status: isValid ? "success" : "failed",
        transactionId: razorpay_payment_id,
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
      });
      
      res.json({ success: isValid, payment });
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Payment verification failed" });
    }
  });
  
  app.get("/api/payments", requireAuth, async (_req: Request, res: Response) => {
    try {
      const payments = await storage.getAllPayments();
      res.json(payments);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch payments" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
