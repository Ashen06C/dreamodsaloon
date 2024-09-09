const Info = () => {
  return (
    <section className=" border border-black flex flex-col md:flex-row justify-around gap-20 bg-orange-100 p-6 mt-2">
      <div className="text-center ">
        <h2 className="font-bold pb-2 text-2xl">Our Location</h2>
        <p className="font-semibold">Hettimulla , Kegalle</p>
      </div>
      <div className="text-center">
        <h2 className="font-bold pb-2 text-2xl">Opening Hours</h2>
        <p className="font-semibold pb-1">10 am to 07 pm</p>
        <p className="font-bold text-red-600">"" Monday Closed ""</p>
      </div>
      <div className="text-center">
        <h2 className="font-bold pb-2 text-2xl">Contact Us</h2>
        <p className="font-semibold">(+94) 071 744 7081</p>
        <p className="font-semibold">(+94) 078 138 9786</p>
      </div>
    </section>
  );
};

export default Info;
