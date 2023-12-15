import "./Servicios.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { GetInfo } from "../../data/informCards";

export const Servicios = () => {

  const informCards = GetInfo();

  return (

    <div
      className="information-cont overflow-hidden w-full max-w-[100dvw] flex items-center content-center justify-center mx-auto h-[100vh]"
      id="servicios"
    >
      <div className="information border-t-[3px] border-black overflow-hidden w-full max-w-[100dvw] gap-4 flex flex-col justify-start items-center h-full max-h-[90vh] md:max-h-[90vh] px-4">
        <h2
          className="services-title font-extrabold text-2xl md:text-3xl py-4 text-white flex justify-center mt-16 md:mt-0 items-center overflow-visible z-[1] w-[100dvw] bg-black"
          data-aos="fade-left"
          data-aos-once="true"
        >
          Servicios
        </h2>
        <div className="info overflow-visible gap-4 flex-col md:flex-row w-[95dvw] md:w-[70vw] my-auto flex items-center content-center justify-center pb-4">
          <div className="md:min-w-[23rem] flex flex-col mx-auto items-center overflow-hidden justify-center content-center w-[full]">
            <h2
              className="font-extrabold text-white w-full mb-4 text-2xl md:text-3xl md:px-8 text-center overflow-hidden"
              data-aos="fade-left"
              data-aos-once="true"
            >
              Te invitamos a conocer las facilidades que <br></br>
              <span className="text-green-500">Pocki trae para tí.</span>
            </h2>
            <p
              className="md:px-6 w-full text-base text-gray-200 text-center overflow-y-hidden"
              data-aos="fade-left"
              data-aos-once="true"
              data-aos-delay="200"
            >
              {" "}
              Nuestro asistente virtual ofrece eficiencia y precisión en tareas
              diarias, programación de citas, recordatorios y mucho más,
              mejorando así su productividad!{" "}
            </p>
          </div>

          <Swiper
            slidesPerView={1}
            cssMode={true}
            direction="horizontal"
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="swiper-cont swiper-cont w-full md:w-[100%] md:min-w-[18rem] rounded-xl"

            data-aos="flip-left"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            {informCards.map((card, index) => (
              <SwiperSlide className="card overflow-hidden" key={index}>
                <div className="swiper-card overflow-hidden bg-white h-[19.5rem] md:h-[26rem] border-solid ">
                  <div className="swiper-image-cont flex content-center items-center">
                    <div
                      className={`swiper-image-bg image${card.id} h-[12rem] md:h-[15rem]`}
                      alt={card.title}
                    />
                  </div>
                  <style>
                    {`
                                    .swiper-button-next,
                                    .swiper-button-prev {
                                        color: #fff;
                                        transform: translateY(-4rem);
                                        opacity: 0.5;
                                    }

                                    .swiper-button-next:hover,
                                    .swiper-button-prev:hover {
                                        opacity: 1;
                                    }

                                    .image${card.id} {
                                        background-image: url(${card.background});
                                        width: 100%;
                                        margin-left: auto;
                                        margin-right: auto;
                                        background-size: cover;
                                        background-position: center;
                                    }
                                  
                                    .swiper-image-char {
                                      width: 100%;
                                      height: 15rem;
                                      background-color: rgb(0 255 210 / 17%);
                                      opacity: 0.9;
                                      border-radius: 50%;
                                    }
                                  
                                    .card${card.id} {
                                      background-image: url(${card.img});
                                      background-size: contain;
                                      background-repeat: no-repeat;
                                      background-position: center;
                                    }
                                  
                                    .information-cont {
                                        width: 100dvw;
                                        height: 100vh;
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        background-color: white;
                                    }
                                `}
                  </style>
                  <div className="card-information flex flex-col items-center">
                    <h3 className="px-5 pt-5 text-xl font-bold text-center pb-1">
                      {card.title}
                    </h3>
                    <p className="px-5 pb-5 leading-4 text-xs text-center">
                      {card.text}
                    </p>
                    <button
                      type="button"
                      className="bg-lime-300 w-[9.5rem] text-s p-1 hidden md:block"
                    >
                      Próximamente...
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};