import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import Footer from '../../components/footer/Footer';

const BgContainerTitle = "rgb(114, 18, 204)";
const ColorBorder = "#FFF";
const ColorTitle = "#FFF";


function HomePage() {

    const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 780, itemsToShow: 2},
        {width: 1024, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ]

    return (
        <div>
            <ContainerTitle>
                <Title>Frameworks</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} >
                    <Card>
                        <img  width="1220" height="300" alt="" src={'https://edytajordan.me/wp-content/uploads/2016/07/bootstrap-logo.jpg'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://cdn-images-1.medium.com/max/2400/1*FDNeKIUeUnf0XdqHmi7nsw.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'http://markimarta.com/wp-content/uploads/2016/08/jquery-logo1.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://th.bing.com/th/id/OIP.y_knLh3mocElk4kq5-BdVwD6D6?pid=ImgDet&rs=1'}  />
                    </Card>
                    <Card>
                        <img  width="1220" height="300" alt="" src={'https://edytajordan.me/wp-content/uploads/2016/07/bootstrap-logo.jpg'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://cdn-images-1.medium.com/max/2400/1*FDNeKIUeUnf0XdqHmi7nsw.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'http://markimarta.com/wp-content/uploads/2016/08/jquery-logo1.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://th.bing.com/th/id/OIP.y_knLh3mocElk4kq5-BdVwD6D6?pid=ImgDet&rs=1'}  />
                    </Card>
                    
                </Carousel>
            </StyleCarousel>    

            <ContainerTitle>
                <Title>Bibliotecas</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} >
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://th.bing.com/th/id/OIP.8u3SnJ-ntOd5KCK0I6JflQHaD4?pid=ImgDet&rs=1'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2017/06/d3logo.png?fit=590%2C313&ssl=1'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://th.bing.com/th/id/OIP.8u3SnJ-ntOd5KCK0I6JflQHaD4?pid=ImgDet&rs=1'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2017/06/d3logo.png?fit=590%2C313&ssl=1'}  />
                    </Card>
                </Carousel>
            </StyleCarousel> 

            <ContainerTitle>
                <Title>Linguagens de Programação</Title>
            </ContainerTitle>

            <StyleCarousel>
                <Carousel breakPoints={breakPoints} >
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://www.carrida-technologies.com/wp-content/uploads/2019/05/2_c-1.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://www.brcline.com/wp-content/uploads/2020/07/javascript-logo-380x380.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://logodownload.org/wp-content/uploads/2019/10/python-logo.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://cdn.tutsplus.com/net/uploads/2013/06/procedural-to-oop-php-retina-preview.jpg'}  />
                    </Card>

                    <Card>
                        <img width="1220" height="300" alt="" src={'https://www.carrida-technologies.com/wp-content/uploads/2019/05/2_c-1.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://www.brcline.com/wp-content/uploads/2020/07/javascript-logo-380x380.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://logodownload.org/wp-content/uploads/2019/10/python-logo.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png'}  />
                    </Card>
                    <Card>
                        <img width="1220" height="300" alt="" src={'https://cdn.tutsplus.com/net/uploads/2013/06/procedural-to-oop-php-retina-preview.jpg'}  />
                    </Card>
                </Carousel>
            </StyleCarousel> 
            
            <Footer />
        </div>
    )
}

export default HomePage;

const ContainerTitle = styled.div`
    background-color: ${BgContainerTitle};
    height: 100px;
    margin-bottom: 55px;
    border-top: 1px solid ${ColorBorder};
    border-bottom: 1px solid ${ColorBorder};

    @media (max-width: 500px){
        height: 80px;
    }
`
const Title = styled.h1`
   color: ${ColorTitle};
   text-align: center;
   padding-top:35px;

   @media (max-width: 1024px){
      
    }

   @media (max-width: 780px){
      font-size: 18pt;
    }

   @media (max-width: 500px){
      font-size: 14pt;
      padding-top:30px;
    }
`

const Card = styled.div`
    width: 100%;
    height: 350px;
    background-color: none;
    font-size: 38px;
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    

    @media (max-width: 1024px){
      
    }

    
`

const StyleCarousel = styled.div`
    margin-top: 20px;
    margin-bottom: 120px;
    
`   

