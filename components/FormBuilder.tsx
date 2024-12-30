"use client";

import { Form } from "@prisma/client";
import React from "react";
import PreviewDialogBtn from "./PreviewDialogBtn";
import SaveFormBtn from "./SaveFormBtn";
import PublishFormBtn from "./PublishFormBtn";

function FormBuilder({ form }: { form: Form }) {
  return (
    <main className="flex flex-col w-full h-full">
      <nav className="flex justify-between items-center border-b-2 border-muted p-4 gap-3">
      <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2 ml-auto">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn />
                <PublishFormBtn />
              </>
            )}
            </div>
      </nav>
      <div className="flex w-full flex-grow items-center
       justify-center relative overflow-y-auto h-[200px] 
       bg-accent bg-[url(/paper.svg)] dark:bg-[url(/paper-dark.svg)]">
      </div>
    </main>
  );
}

export default FormBuilder;
