import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body using the schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const createdAt = new Date().toISOString();
      
      // Store contact in memory
      const contact = await storage.createContact({
        ...contactData,
        createdAt
      });
      
      // Send success response
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        contactId: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
