import { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Filter from '../../components/filter/Filter';
// import { blogsData } from '../../data';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axiosClient from '../../../axios-client';

const Blogs = () => {
    const [blogsData, setBlogsData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [active, setActive] = useState('');
    const carouselRef = useRef(null);

    const handleScroll = (direction) => {
        const { current } = carouselRef;
        if (direction === "left") {
            current.scrollLeft -= 302;
        } else {
            current.scrollLeft += 302;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const { current } = carouselRef;
            const maxScrollWidth = (current.scrollWidth - current.clientWidth);

            handleScroll("left");
            if (current.scrollLeft <= -(maxScrollWidth - 1)) {
                current.scrollLeft = 0
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);



    const getBlogs = () => {
        axiosClient.get('/blogs')
            .then(({ data }) => {
                setBlogsData(data.blogs);
                setCategoriesData(data.categories)
                setActive(data.categories[0].name)
                console.log(blogsData);
            })
    }


    useEffect(() => {
        getBlogs()
    }, [])








    return (


        
        <div className='blogs' style={{ paddingTop: "25px" }}>
            <div className='blogs_filter' style={{ marginTop: '64px' }}>
                <Filter
                    categories={categoriesData}
                    active={active}
                    setActive={setActive}
                    title="مدوناتنا"
                    paragraph="Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar "
                    show={true}
                />
            </div>
            <div className='carousel_section' style={{ backgroundColor: "#ffffff" }}>
                <div className='carousel' ref={carouselRef} style={{ width: "89%" }}>
                    <div className='inner-carousel'>
                        {blogsData.map((blog) => (
                            active === blog.state &&
                            <Card sx={{ width: "284px", borderRadius: "16px", marginLeft: "32px", marginBottom: "10px" }} key={blog.id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={`${blog.image}`}
                                        alt={blog.title}
                                    />
                                    <CardContent sx={{ border: "none", padding: "16px" }} className='card'>
                                        <Typography gutterBottom sx={{ fontSize: "18px", lineHeight: "21px", fontWeight: 700 }} variant="h5" component="div">
                                            {blog.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: "14px", lineHeight: "24px", fontWeight: 400, color: "#808082" }} >
                                            {(blog.description).substring(0, 45)+"...."}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                                    <Typography variant="body2" sx={{ fontSize: "10px", lineHeight: "12px", fontWeight: 400, color: "#757B82", display: "flex", alignItems: "center", gap: "5px" }}>
                                        <img src='/calender.svg' alt='calender' />
                                        {blog.updated_at}
                                    </Typography>
                                    <a href={`/blogs/${blog.id}`} style={{ fontSize: "10px", lineHeight: "12px", fontWeight: 700, color: "#BBA664", textDecoration: "none" }} >
                                        اقرأ المزيد
                                        <img src='/double-arrow.svg' alt='double-arrow' />
                                    </a>
                                </CardActions>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="icons">
                    <ArrowForward className="next icon"
                        onClick={() => handleScroll("left")}
                        sx={{ color: "#111928", fontSize: "52px" }}
                    />
                    <ArrowBack className="prev icon"
                        onClick={() => handleScroll("right")}
                        sx={{ color: "#111928", fontSize: "52px" }}
                    />
                </div>
            </div>
        </div>
    )
};

export default Blogs;