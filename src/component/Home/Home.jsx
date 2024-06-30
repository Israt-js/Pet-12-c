const Home = () => {
  return (
    <div className="">
      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PZLFzjZ/nikolay-tchaouchev-GUh-O9-PVO7-QM-unsplash.jpg)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mr-9">
          <div className="">
            <p className="mb-5 text-left font-bold w-[500px]">
              The history of pets is intertwined with the process of animal domestication, and it is likely that the dog,
              as the first domesticated species, was also the first pet. Perhaps the initial steps toward domestication
              were taken largely through the widespread human practice of making pets of captured young wild animals.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <h1 className="text-5xl font-semibold text-center pt-4">Know about pets</h1>
        <div className="card w-[96%] h-[600px] m-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/ym2C0th/freddie-marriage-i-YQC9x-WMvw4-unsplash.jpg" alt="Cat" className="rounded-xl object-cover w-full h-full"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Cat</h2>
            <p>
              Cats are intriguing and often mysterious companions that have captivated humans for centuries. With their
              lithe bodies, sharp claws, and exceptional hunting skills, they effortlessly blend elegance with wild
              instincts. Beyond their physical prowess, cats are known for their independent and curious nature. Each
              cat has a unique personality, ranging from playful and affectionate to aloof and solitary. Their ability
              to purr, a soothing sound produced during moments of contentment, adds to their charm and the sense of
              comfort they provide to their owners. Whether they're basking in a sunbeam, chasing after a toy, or simply
              observing their surroundings with keen eyes, cats bring a sense of tranquility and fascination to any home.
              Their enigmatic behavior and undeniable grace make them beloved pets and treasured members of the family.
            </p>
          </div>
        </div>
        <div className="card w-[96%] h-[600px] m-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/YBcdZ6f/peri-stojnic-5-Vr-RVPfb-MI-unsplash.jpg" alt="Dog" className="rounded-xl object-cover w-full h-full"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dogs</h2>
            <p>
              Dogs are loyal and affectionate companions, often referred to as "man's best friend" for their unwavering
              devotion and ability to form deep bonds with humans. They come in a vast array of breeds, each with unique
              traits and characteristics, from the tiny and energetic Chihuahua to the large and gentle Great Dane. Dogs
              are known for their keen sense of smell, intelligence, and versatility, making them invaluable in various
              roles such as service animals, therapy dogs, and working dogs in fields like search and rescue. Their
              playful and social nature makes them wonderful family pets, bringing joy, laughter, and a sense of security
              to their owners. Whether they are eagerly wagging their tails in greeting, fetching a ball with unbridled
              enthusiasm, or simply lying at their owner's feet, dogs have an unparalleled ability to bring warmth and
              happiness to any household. Their loyalty, love, and companionship make them cherished members of the
              family, capable of forming lasting connections that enrich our lives in countless ways.
            </p>
          </div>
        </div>
        <div className="card w-[96%] h-[600px] m-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="https://i.ibb.co/T0zbvDL/alvan-nee-br-Fs-Z7qsz-SY-unsplash.jpg" alt="Dog" className="rounded-xl object-cover w-full h-full"/>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Dog</h2>
            <p>
              Dogs are remarkable animals known for their unwavering loyalty and affectionate nature. As one of the first
              domesticated species, they have been close companions to humans for millennia. Dogs come in a variety of breeds,
              each with distinct characteristics and temperaments, from the energetic Border Collie to the gentle Golden
              Retriever. Their keen senses, particularly their sense of smell, make them valuable in many roles, including search
              and rescue, therapy, and service work for individuals with disabilities. Beyond their practical abilities, dogs
              are cherished for their playful and social demeanor. They thrive on interaction, often forming deep emotional
              bonds with their owners. Whether they're bounding joyfully in a park, performing tricks, or providing comfort
              with a simple snuggle, dogs bring immense joy and warmth to our lives. Their capacity for empathy and companionship
              makes them irreplaceable members of the family, always ready to offer unconditional love and support.
            </p>
          </div>
        </div>
      </div>
      <div className="action">
        <h1 className="text-5xl font-semibold text-center pt-4">Action</h1>
        <div className="flex flex-col items-center mt-8 space-y-8">
          <div className="relative w-[96%] h-[500px]">
            <img src="https://i.ibb.co/F568r68/hang-niu-Tn8-DLxwu-DMA-unsplash.jpg" alt="Adopt a pet" className="rounded-xl object-cover w-full h-full"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
              <p className="text-3xl text-white font-bold text-center">
                "Give a pet a new home and a better life. Adopt today and make a difference!"
              </p>
            </div>
          </div>
          <div className="relative w-[96%] h-[500px]">
            <img src="https://i.ibb.co/zXjDwTs/mikhail-vasilyev-Nodtn-Cs-Ld-TE-unsplash.jpg" alt="Inspirational pet" className="rounded-xl object-cover w-full h-full"/>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
              <p className="text-3xl text-white font-bold text-center">
                "Your new best friend is waiting. Bring joy and love into your home by adopting a pet."
              </p>
            </div>
          </div>
          <div className="relative w-[96%] h-[500px]">
            <img src="https://i.ibb.co/tsRpDZh/maddy-baker-Wp-LC86-UD7-Lk-unsplash.jpg" alt="Inspire pet" className="rounded-xl object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
              <p className="text-3xl text-white font-bold text-center">
                "Open your heart and home to a furry friend. Adopt a pet and change a life."
              </p>
            </div>
          </div>
          <div className="relative w-[96%] h-[500px]">
            <img src="https://i.ibb.co/XjPhyyN/berkay-gumustekin-ngqyo2-AYYn-E-unsplash.jpg" alt="Inspire pet" className="rounded-xl object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-xl">
              <p className="text-3xl text-white font-bold text-center">
                "Adopt a pet, gain a friend for life. Make the compassionate choice today."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
      <div className="about-us bg-gray-100 py-20">
      <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">About Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-center justify-center">
        <img src="https://i.ibb.co/25p8Cz1/alvan-nee-ZCHj-2l-JP00-unsplash.jpg" alt="About Us" className="rounded-full h-64 w-64 object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg mb-4">
          At Our Pet Paradise, we are passionate about connecting pets with loving families and providing them with the
          care and attention they deserve. With years of experience in pet adoption and welfare, we strive to make the
          adoption process as smooth and joyful as possible for both pets and their new owners.
        </p>
        <p className="text-lg">
          Our dedicated team works tirelessly to ensure that every pet finds their perfect match and that each adoption
          is a lifelong success story. We believe that every pet deserves a loving home, and we are committed to making
          that a reality, one adoption at a time.
        </p>
      </div>
    </div>
      </div>
      </div>

      </div>
      <div className="">
      <div className="section bg-gray-300 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">Our Adoption Process</h2>
    <p className="text-lg">
      Our adoption process is designed to ensure that each pet finds the perfect match and that every adoption is a
      lifelong success story. It begins with a thorough application review followed by a meet-and-greet session to
      assess compatibility. Once approved, we provide guidance and support to help integrate your new pet seamlessly
      into your home.
    </p>
  </div>
</div>

<div className="section bg-gray-200 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">Volunteer Opportunities</h2>
    <p className="text-lg">
      Join our passionate team of volunteers and make a difference in the lives of pets in need. Whether you're
      walking dogs, socializing cats, or assisting with administrative tasks, your time and effort contribute to
      creating happier, healthier environments for our furry friends. Volunteer today and experience the joy of
      giving back to your community.
    </p>
  </div>
</div>

      </div>
      <div className="">
      <div className="section bg-gray-200 py-20">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-10">Pet Care Tips</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="text-center">
        <img src="https://i.ibb.co/m8914Jv/chris-abney-m-As-KA0j-Ffe-Q-unsplash.jpg" alt="Pet Care" className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Nutrition</h3>
        <p className="text-lg">Learn about the importance of a balanced diet and proper nutrition for your pet's health and well-being.</p>
      </div>
      <div className="text-center">
        <img src="https://i.ibb.co/0cyjxKK/darinka-kievskaya-ff221-Bu56m-I-unsplash.jpg" alt="Pet Care" className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Exercise</h3>
        <p className="text-lg">Discover fun and engaging ways to keep your pet active and maintain their physical fitness.</p>
      </div>
      <div className="text-center">
        <img src="https://i.ibb.co/HzBb337/erda-estremera-D1wi-HCov-GJ0-unsplash.jpg" alt="Pet Care" className="mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Grooming</h3>
        <p className="text-lg">Explore grooming tips and techniques to keep your pet looking and feeling their best.</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Home;
