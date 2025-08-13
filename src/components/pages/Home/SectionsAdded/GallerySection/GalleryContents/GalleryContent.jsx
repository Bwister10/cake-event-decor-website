import GalleryAll from "../../GalleryPageComponents/GalleryAll/GalleryAll";
import GalleryCakes from "../../GalleryPageComponents/GalleryCakes/GalleryCakes";
import GalleryEvents from "../../GalleryPageComponents/GalleryEvents/GalleryEvents";
import GalleryDecorations from "../../GalleryPageComponents/GalleryDecorations/GalleryDecorations";

export default function GalleryContent({ activeTab, items }) {
  if (activeTab === "All") return <GalleryAll items={items} />;
  if (activeTab === "Cakes") return <GalleryCakes items={items} />;
  if (activeTab === "Events") return <GalleryEvents items={items} />;
  if (activeTab === "Decorations") return <GalleryDecorations items={items} />;
  return null;
}

// Note: Ensure that the `items` prop is passed correctly from the parent component
// and contains the relevant data for each gallery type.
// This component will render the appropriate gallery content based on the active tab.
// Make sure to import this component in the GallerySection and use it accordingly.
//(Your developer Bright Ayomide😉)
