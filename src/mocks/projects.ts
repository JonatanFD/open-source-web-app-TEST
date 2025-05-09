type ProjectStatus = "blueprint" | "designed-garment";

interface Project {
  id: string;
  created_at: Date;
  status: ProjectStatus; // indicates the project status
  preview_image_url: string;
}

interface Canvas {
  id: string;
  project_id: string;
}

type LayerType = "text" | "image";

interface Layer {
  id: string;
  canvas_id: string;
  type: LayerType;
  z_index: number;
  content: TextLayer | ImageLayer;
}

interface TextLayer {
  text: string;
  x: number;
  y: number;
  font_family: string;
  font_size: number;
  font_weight: number;
}
interface ImageLayer {
  image_url: string;
  width: number;
  height: number;
  x: number;
  y: number;
}

const PROJECT_MOCK = [];

export async function getProjectsByUserId() {
  return;
}
