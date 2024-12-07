import React from "react";
import Container from "./Container";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

function ProductSection({
  sectionTitle,
  sectionHeading,
  children,
  btnText,
  topRight,
}: {
  sectionTitle: string;
  sectionHeading: string;
  children: React.ReactNode;
  btnText?: string;
  topRight?: "arrow" | "btn" ;
}) {
  return (
    <div className="my-24">
      <Container>
        <div className="w-full space-y-6">
          <div className="text-secondary2 text-Title-16PX-SemiBold flex items-center gap-3">
            <div className="h-10 w-5 bg-secondary2 rounded"></div>
            {sectionTitle}
          </div>
          <div className="text-button flex justify-between">
            <div>
              <h3 className="md:text-Heading-48PX-SemiBold  text-Heading-36PX-SemiBold">{sectionHeading}</h3>
            </div>
            { topRight === "btn" ? (
              btnText && <Button >{btnText}</Button>
            ) : (
              <div className="flex justify-center items-center gap-3">
                <ArrowLeft className="bg-secondary rounded-full md:p-2  p-1 h-8 w-8 md:h-[2.875rem] md:w-[2.875rem] text-text2/80 cursor-pointer" />{" "}
                <ArrowRight className="bg-secondary rounded-full md:p-2  p-1 h-8 w-8 md:h-[2.875rem] md:w-[2.875rem] text-text2/80 cursor-pointer" />
              </div>
            )}
          </div>
          <div className="w-full">{children}</div>

          {btnText && topRight !== "btn" && (
            <div className="flex justify-center">
              <Button>{btnText}</Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default ProductSection;
