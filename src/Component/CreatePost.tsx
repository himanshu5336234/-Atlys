import React, { useState } from "react";
import Onboarding from "./Onboarding";
import CustomButton from "./UI/CustomButton";
const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState("");
  const [isOpen, setModalOpen] = useState(false);
  const handlePost = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className="p-4 mb-4 bg-secondary rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-white">Create post</h3>
        <div className="mt-2">
          <textarea
            className="w-full p-2 text-white bg-primary rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="How are you feeling today?"
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="flex justify-end mt-2">
          <CustomButton label={" Post"} onClick={handlePost} />
        </div>
      </div>
      {<Onboarding isOpen={isOpen} setModalOpen={setModalOpen} />}
    </>
  );
};

export default CreatePost;
