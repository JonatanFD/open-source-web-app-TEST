type ProjectStatus = "blueprint" | "designed-garment";

interface Project {
  id: string;
  created_at: Date;
  status: ProjectStatus; // indicates the project status
  preview_image_url: string;
  name: string;
  tshirt_color: string;
  tshirt_size: "S" | "M" | "L" | "XL" | "XXL";
  last_modified: Date;
}

interface Canvas {
  id: string;
  project_id: string;
  background_color: string;
  created_at: Date;
  last_modified: Date;
}

type LayerType = "text" | "image";

interface Layer {
  id: string;
  canvas_id: string;
  type: LayerType;
  z_index: number;
  content: TextLayer | ImageLayer;
  is_visible: boolean;
  created_at: Date;
  last_modified: Date;
}

interface TextLayer {
  text: string;
  x: number;
  y: number;
  font_family: string;
  font_size: number;
  font_weight: number;
  color: string;
  rotation: number;
  text_align: "left" | "center" | "right";
  opacity: number;
}

interface ImageLayer {
  image_url: string;
  width: number;
  height: number;
  x: number;
  y: number;
  rotation: number;
  opacity: number;
  scale: number;
  maintain_aspect_ratio: boolean;
}

const PROJECT_MOCK = [];

export async function getProjectsByUserId() {
  return;
}
