import { connect } from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

connect(); // Establish a connection to the database

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, email, phoneNumber, message } = reqBody;

        // Create a new contact entry
        const newContact = new Contact({
            name,
            email,
            phoneNumber,
            message,
        });

        const savedContact = await newContact.save();

        // Send email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "tabarkte86",
                pass: process.env.PASSWORD,
            },
        });

        const mailOptions = {
            from: "tabarkte86@gmail.com",
            to: "info@altabarak.com",
            subject: "New Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(savedContact, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
