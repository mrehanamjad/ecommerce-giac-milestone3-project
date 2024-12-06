import React from "react";
import Container from "./Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

function ProductSection({sectionTitle,sectionHeading,children,btnText}:{sectionTitle:string;sectionHeading:string;children: React.ReactNode;btnText?:string}) {
  return (
    <div className="my-24">
      <Container>
        <div className="w-full space-y-6">
          <div className="text-secondary2 text-Title-16PX-SemiBold flex items-center gap-3">
            <div className="h-10 w-5 bg-secondary2 rounded"></div>{sectionTitle}
          </div>
          <div className="text-button flex justify-between">
            <div>
              <h3 className="text-Heading-48PX-SemiBold">{sectionHeading}</h3>
            </div>
            <div className="flex justify-center items-center gap-3">
              <ArrowLeft className="bg-secondary rounded-full p-2 h-[2.875rem] w-[2.875rem] text-text2 cursor-pointer" />{" "}
              <ArrowRight className="bg-secondary rounded-full p-2 h-[2.875rem] w-[2.875rem] text-text2 cursor-pointer" />
            </div>
          </div>
          <div className="w-full">
            {children}
          </div>

        {btnText &&  <div className="flex justify-center">
            <Button variant={"figmaBtn"} size={"xl"}>
              {btnText}
            </Button>
          </div>}
        </div>
      </Container>
    </div>
  );
}

export default ProductSection;
