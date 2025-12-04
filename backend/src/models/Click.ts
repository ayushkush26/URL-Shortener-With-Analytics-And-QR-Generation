import mongoose, { Document, Schema } from 'mongoose';

export interface IClick extends Document {
  shortUrlId: mongoose.Types.ObjectId;
  ip: string;
  userAgent: string;
  createdAt: Date;
}

const ClickSchema = new Schema<IClick>(
  {
    shortUrlId: { 
      type: Schema.Types.ObjectId, 
      ref: 'ShortUrl', 
      required: true,
      index: true // Index for fast queries
    },
    ip: { type: String, required: true },
    userAgent: { type: String, required: true }
  },
  { timestamps: true }
);

// Index for analytics queries
ClickSchema.index({ shortUrlId: 1, createdAt: 1 });

export const Click = mongoose.model<IClick>('Click', ClickSchema);
