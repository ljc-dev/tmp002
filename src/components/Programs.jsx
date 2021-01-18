import ProgramsThumbComponent from "./BlogsThumbComponent";

const Programs = () => {
  return (
    <div className="mt-12">
      <div className=" border-b border-gray-600 pb-10">
        <h1 className="px-6 mt-24 capitalize font-robo font-light text-4xl">My Online Business Development Programs</h1>
        <p className="px-6 text-sm leading-relaxed font-robo font-light mt-12">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
      </p>
      </div>
      <div className="pb-12">
        <h2 className="px-6 text-2xl font-robo font-light mt-24 ">The Programs</h2>
        <div className="grid grid-cols-1 mt-4 gap-y-14">
          <ProgramsThumbComponent />
        </div>
      </div>
    </div>
  );
}

export default Programs;