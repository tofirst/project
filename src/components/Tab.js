import React, { useState } from "react";
import { Tab } from "@headlessui/react";

export default function Tabs() {
 
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          <Tab>Next</Tab>
          <Tab>Next</Tab>
          <Tab>Next</Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel>Heloo</Tab.Panel>
          <Tab.Panel>Yoo</Tab.Panel>
          <Tab.Panel>Three</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
