export interface SourceChunk {
  id: string;
  heading: string;
  location: string;
  text: string;
  label: string;
  effectiveFrom: string;
  effectiveTo: string;
}

export interface Source {
  id: string;
  title: string;
  type: string;
  topic: string;
  summary: string;
  effectiveDate: string;
  expiryDate: string;
  status: string;
  url: string;
  chunks: SourceChunk[];
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  latency?: number;
  failed?: boolean;
  sources?: Source[];
}

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  sources?: Source[];
}
