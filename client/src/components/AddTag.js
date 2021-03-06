import React, { useState, useEffect } from "react";
import TagsList from "./TagsList";
import AddTagForm from "./AddTagForm";

const AddTag = () => {
  return (
    <>
      <AddTagForm />
      <TagsList />
    </>
  );
};

export default AddTag;
