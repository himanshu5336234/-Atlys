import React, { useState } from "react";
import Onboarding from "./Onboarding";
import Card from "./UI/Card";
import CustomButton from "./UI/CustomButton";
const CreatePost: React.FC = () => {
  const [postContent, setPostContent] = useState("");
  const [isOpen, setModalOpen] = useState(false);
  const handlePost = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Card
      >
        <h3 className="text-lg font-semibold text-white">Create post</h3>
        <div>
          <textarea
            className="w-full p-3 text-sm text-[#7F8084] bg-primary rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="How are you feeling today?"
            rows={3}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <div className="flex justify-end ">
          <CustomButton label={"Post"} onClick={handlePost} />
        </div>
      </Card>
      {<Onboarding isOpen={isOpen} setModalOpen={setModalOpen} />}
    </>
  );
};

export default CreatePost;
