const About = () => {
  return (
    <div className="mt-12">
      <h1 className="px-6 mt-24 capitalize font-robo font-light text-4xl">about me</h1>
      <div className="mt-10 grid grid-cols-1 border-t border-gray-600 px-6">
        <h2 className="font-robo font-light text-2xl mt-12">Leah Webb</h2>
        <p className="font-robo font-light text-base mt-1">Business Consultant</p>
        <p className="font-robo font-light text-sm leading-relaxed mt-10">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p className="font-robo font-light text-sm leading-relaxed mt-6">
          This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
      <div className="mt-16 border-t border-gray-600">
        <img className="mt-6 w-full h-80 object-cover" src="/assets/portrait.jpg" alt="it's me" />
      </div>
      <div className="px-6 pb-10 mb-2 mt-8 grid grid-cols-1 text-white" style={{ backgroundColor: " #282828" }}>
        <h2 className=" mt-12 capitalize font-robo font-light text-2xl">What is Business Development</h2>
        <p className="font-robo font-light text-sm leading-relaxed mt-8">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p className="font-robo font-light text-sm leading-relaxed mt-6">This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
      </div>
    </div >
  );
}

export default About