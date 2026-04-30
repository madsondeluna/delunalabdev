import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Courses } from "@/components/courses";
import { Apps } from "@/components/apps";
import { Videos } from "@/components/videos";
import { Opinions } from "@/components/opinions";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Courses />
        <Apps />
        <Videos />
        <Opinions />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
