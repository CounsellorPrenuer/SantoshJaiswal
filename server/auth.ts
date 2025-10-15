import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { storage } from "./storage";

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

export async function seedAdminUser() {
  const existingAdmin = await storage.getUserByUsername("admin");
  
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await storage.createUser({
      username: "admin",
      password: hashedPassword,
    });
    console.log("✅ Admin user created: admin / admin123");
  }
}

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

export async function validateLogin(username: string, password: string): Promise<boolean> {
  const user = await storage.getUserByUsername(username);
  
  if (!user) {
    return false;
  }
  
  return await bcrypt.compare(password, user.password);
}
