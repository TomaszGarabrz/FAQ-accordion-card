import styled from "styled-components";


export const Wrapper = styled.div`
  background-image: linear-gradient(190deg, var(--soft-violet-color), var(--soft-blue-color));
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FaqWrapper = styled.div`
  width: 50%;
  min-height: 500px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: grid;
  grid-template-columns: 40% 60%;
  position: relative;

  @media (width < 1000px) {
    grid-template-columns: 1fr;
    width: 80%;
  }


  .hidden {
    height: 100%;
    width: 100%; 
    z-index: 999;
    overflow: hidden;
    position: relative;


    @media (width < 1000px) {
      overflow: visible;
      top: -150px;
      width: 80%;
      left: 10%;
    }
}

  .img__wrapper {
    width: 100%;
    position: relative;
  }

  img {
    position: absolute;
    left: -10%;
    width: 110%;
  }
  
  .img__bg {
    top: 20%;
  }

  .img__box {
    width: 150px;
    top: 50%;
    z-index: 999;
    left: -20.5%;

    @media (width < 1000px) {
        width: 100px;
        left: 0;
        top: -150%;
    }
  }

  .img__woman {
    top: 20%;
  }


  .faq__content {

    width: 80%;
    margin: 0 auto;
    padding: 3rem 0;
    color: #000;

    @media (width < 1000px) {
      margin-top: 5rem;
    }

    &-title {
      font-size: 2rem;
      
      @media (width < 1000px) {
      text-align: center;
    }
    }

    &__list {
      list-style: none;
      margin: 1rem 0;
      padding: 0;
      font-size: 1rem;

      .list__item {
        border-bottom: 1px solid #ddd;
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: 1rem 0;
        position: relative;
        overflow: hidden;


        &__title {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;

          &-text {
            @media (width < 1000px) {
            width: 80%;
          }

            &.active {
              font-weight: bold;
            }
          }

          

          &-button {
            border: none;
            background: none;
            cursor: pointer;
            transition: all .25s ease-in-out;
      
            display: flex;
            align-items: center;

            svg {
           
            }
            

            &.active {
              transform: rotate(180deg);
            }
          }
        }

        .item__text {
          font-size: .9rem;
          transition: all .5s ease-in-out;
    
          &.hidden {
            visibility: hidden;
            opacity: 0;
            height: 0;
            transition: all .5s ease-in-out;
          }

          &.show {
            visibility: visible;
            opacity: 1;
            height: 100%;
            transition: all .5s ease-in-out;
          }
        }
      }
    }
  }
`