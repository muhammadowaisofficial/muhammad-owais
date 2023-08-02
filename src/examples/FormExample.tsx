"use client";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { exampleSchema } from "@/schemas/expampleSchema";

import CustomForm from "@/components/customui/CustomForm";
import CustomCheckboxGroup from "@/components/customui/CustomCheckboxGroup";
import CustomButton from "@/components/customui/CustomButton";
import CustomCheckbox from "@/components/customui/CustomCheckbox";
import CustomInput from "@/components/customui/CustomInput";
import CustomCombobox from "@/components/customui/CustomCombobox";
import CustomPhone from "@/components/customui/CustomPhone";

const FormExample = () => {
  const form = useForm<z.infer<typeof exampleSchema>>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      // phone: "",
      // email: "",
      // services: "",
      name: "",
      phone:"",
      termsandservice: false,
      items: ["recents", "home"],
    },
  });

  async function onSubmit(values: z.infer<typeof exampleSchema>) {
    console.log(values);
  }

  const items = [
    {
      id: "recents",
      label: "Recents",
      description: "Descriptions",
    },
    {
      id: "home",
      label: "Home",
    },
    {
      id: "applications",
      label: "Applications",
      description: "Descriptions",
    },
    {
      id: "desktop",
      label: "Desktop",
    },
    {
      id: "downloads",
      label: "Downloads",
      description: "Descriptions",
    },
    {
      id: "documents",
      label: "Documents",
    },
  ];
  const languages = [
    { id: "1", label: "English", value: "en" },
    { id: "2", label: "French", value: "fr" },
    { id: "3", label: "German", value: "de" },
    { id: "4", label: "Spanish", value: "es" },
    { id: "5", label: "Portuguese", value: "pt" },
    { id: "6", label: "Russian", value: "ru" },
    { id: "7", label: "Japanese", value: "ja" },
    { id: "8", label: "Korean", value: "ko" },
    { id: "9", label: "Chinese", value: "zh" },
  ];
  return (
    <div className="card flex w-[320px] flex-col gap-2 rounded border p-4">
      <h4 className="w-full text-center">Form</h4>


      <CustomForm form={form} onSubmit={form.handleSubmit(onSubmit)}>

      {/* <p className="mt-4">Input :</p> */}
      <CustomInput control={form.control} label="Name" name="name" description="Please Enter your Name" placeholder="Fahad" />

      {/* <p className="mt-4">Phone :</p> */}
      <CustomPhone control={form.control} label="Phone" name="phone" />

      {/* <p className="mt-4">Combobox :</p> */}
      <CustomCombobox form={form} control={form.control} label="Languages" name="language" placeHolder="Select Language" options={languages} optionsEmptyPlaceholder="No Language Found." />

        {/* <p className="mt-4">Checkbox (Single) :</p> */}
        <CustomCheckbox
          control={form.control}
          label="I accept the Terms of Services"
          name="termsandservice"
          description="By selecting this you will automatilly be accepting out Terms if Services."
        />
        {/* <p className="mt-4">Checkbox (Multiple):</p> */}
        <CustomCheckboxGroup
          control={form.control}
          label={"Directories"}
          name="items"
          description="Select the items you want to display in the sidebar."
          options={items}
        />
        <CustomButton type="submit">Submit</CustomButton>
      </CustomForm>
    </div>
  );
};

export default FormExample;
