import { 
  type User, 
  type InsertUser, 
  type Blog, 
  type InsertBlog,
  type Package,
  type InsertPackage,
  type ContactSubmission,
  type InsertContact,
  type Payment,
  type InsertPayment,
  type PackageCategory
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllBlogs(): Promise<Blog[]>;
  getBlog(id: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: string, blog: Partial<InsertBlog>): Promise<Blog | undefined>;
  deleteBlog(id: string): Promise<boolean>;
  
  getAllPackages(category?: PackageCategory): Promise<Package[]>;
  getPackage(id: string): Promise<Package | undefined>;
  createPackage(pkg: InsertPackage): Promise<Package>;
  updatePackage(id: string, pkg: Partial<InsertPackage>): Promise<Package | undefined>;
  deletePackage(id: string): Promise<boolean>;
  
  getAllContacts(): Promise<ContactSubmission[]>;
  createContact(contact: InsertContact): Promise<ContactSubmission>;
  
  getAllPayments(): Promise<Payment[]>;
  getPayment(id: string): Promise<Payment | undefined>;
  createPayment(payment: InsertPayment): Promise<Payment>;
  updatePayment(id: string, payment: Partial<InsertPayment>): Promise<Payment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private blogs: Map<string, Blog>;
  private packages: Map<string, Package>;
  private contacts: Map<string, ContactSubmission>;
  private payments: Map<string, Payment>;

  constructor() {
    this.users = new Map();
    this.blogs = new Map();
    this.packages = new Map();
    this.contacts = new Map();
    this.payments = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async getAllBlogs(): Promise<Blog[]> {
    return Array.from(this.blogs.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  async getBlog(id: string): Promise<Blog | undefined> {
    return this.blogs.get(id);
  }
  
  async createBlog(insertBlog: InsertBlog): Promise<Blog> {
    const id = randomUUID();
    const blog: Blog = { 
      ...insertBlog, 
      id,
      createdAt: new Date()
    };
    this.blogs.set(id, blog);
    return blog;
  }
  
  async updateBlog(id: string, updates: Partial<InsertBlog>): Promise<Blog | undefined> {
    const blog = this.blogs.get(id);
    if (!blog) return undefined;
    
    const updated: Blog = { ...blog, ...updates };
    this.blogs.set(id, updated);
    return updated;
  }
  
  async deleteBlog(id: string): Promise<boolean> {
    return this.blogs.delete(id);
  }
  
  async getAllPackages(category?: PackageCategory): Promise<Package[]> {
    const allPackages = Array.from(this.packages.values());
    if (category) {
      return allPackages.filter(pkg => pkg.category === category);
    }
    return allPackages;
  }
  
  async getPackage(id: string): Promise<Package | undefined> {
    return this.packages.get(id);
  }
  
  async createPackage(insertPackage: InsertPackage): Promise<Package> {
    const id = randomUUID();
    const pkg: Package = { 
      ...insertPackage, 
      id
    };
    this.packages.set(id, pkg);
    return pkg;
  }
  
  async updatePackage(id: string, updates: Partial<InsertPackage>): Promise<Package | undefined> {
    const pkg = this.packages.get(id);
    if (!pkg) return undefined;
    
    const updated: Package = { ...pkg, ...updates };
    this.packages.set(id, updated);
    return updated;
  }
  
  async deletePackage(id: string): Promise<boolean> {
    return this.packages.delete(id);
  }
  
  async getAllContacts(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  async createContact(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = randomUUID();
    const contact: ContactSubmission = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getAllPayments(): Promise<Payment[]> {
    return Array.from(this.payments.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
  
  async getPayment(id: string): Promise<Payment | undefined> {
    return this.payments.get(id);
  }
  
  async createPayment(insertPayment: InsertPayment): Promise<Payment> {
    const id = randomUUID();
    const payment: Payment = { 
      ...insertPayment,
      packageId: insertPayment.packageId ?? null,
      transactionId: insertPayment.transactionId ?? null,
      razorpayOrderId: insertPayment.razorpayOrderId ?? null,
      razorpayPaymentId: insertPayment.razorpayPaymentId ?? null,
      id,
      createdAt: new Date()
    };
    this.payments.set(id, payment);
    return payment;
  }
  
  async updatePayment(id: string, updates: Partial<InsertPayment>): Promise<Payment | undefined> {
    const payment = this.payments.get(id);
    if (!payment) return undefined;
    
    const updated: Payment = { ...payment, ...updates };
    this.payments.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
