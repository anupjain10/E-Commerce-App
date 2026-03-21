import { z } from "zod";

// register schema
export const registerSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(4, "Name must be at least 4 char long")
      .max(255, "Name must not exceed 255 characters"),

    email: z
      .string()
      .trim()
      .toLowerCase()
      .pipe(z.email("Invalid email address")),

    contact: z
      .string()
      .regex(/^[6-9]\d{9}$/, "Enter valid 10 digit phone number"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        "Password must contain uppercase, lowercase, number and special character",
      ),
    confirm_password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match", 
    path: ["confirm_password"], 
  });

// register validation
export const registerValidation = (data) => {
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors = {};

    result.error.issues.forEach((err) => {
      fieldErrors[err.path[0]] = err.message;
    });

    return fieldErrors;
  }

  return {}; // No errors
};

export const loginSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
      "Password must contain uppercase, lowercase, number and special character",
    ),
});

export const loginValidation = (data) => {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const fieldErrors = {};

    result.error.issues.forEach((err) => {
      fieldErrors[err.path[0]] = err.message;
    });

    return fieldErrors;
  }

  return {}; // No errors
};
