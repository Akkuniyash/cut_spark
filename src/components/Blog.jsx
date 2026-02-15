import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      img: 'images/blog/1.jpg',
      title: 'The Ultimate Guide to Creating Emotionally Powerful Wedding Films',
      author: 'Wedding admin',
      date: 'February 4, 2024',
      excerpt: 'We create emotionally powerful wedding films through cinematic editing and heartfelt storytelling, turning real moments into lasting memories.',
      link: 'blog-post.html'
    },
    {
      id: 2,
      img: 'images/blog/2.jpg',
      title: 'From Raw Footage to Fairytale',
      author: 'Wedding admin',
      date: 'October 9, 2023',
      excerpt: 'Discover how outsourcing your editing process saves time, reduces stress, and allows you to focus more on shooting and client relations, leading to business growth.',
      link: 'blog-post2.html'
    },
    {
      id: 3,
      img: 'images/blog/3.jpg',
      title: 'The Future of Wedding Videography',
      author: 'Wedding admin',
      date: 'May 7, 2023',
      excerpt: 'We review the essential software and hardware, from fast storage to powerful GPUs, that will boost your productivity and final video output quality this year.',
      link: 'blog-post3.html'
    },
    {
      id: 4,
      img: 'images/blog/4.jpg',
      title: 'The Secret to Timeless Wedding Films',
      author: 'Wedding admin',
      date: 'April 26, 2023',
      excerpt: 'Learn the art of cinematic color grading to enhance mood and consistency across all your wedding footage, turning standard shots into emotional masterpieces.',
      link: 'blog-post4.html'
    },
    {
      id: 5,
      img: 'images/blog/5.jpg',
      title: 'How to Choose the Best Music for Your Wedding Film Without Copyright Issues',
      author: 'Wedding admin',
      date: 'March 12, 2023',
      excerpt: 'Music is key to emotion. We cover licensing basics and recommend the best royalty-free platforms to find the perfect soundtrack legally and easily.',
      link: 'blog-post5.html'
    },
    {
      id: 6,
      img: 'images/blog/6.jpg',
      title: 'Mastering Audio: The Unsung Hero of Professional Wedding Videos',
      author: 'Wedding admin',
      date: 'February 2, 2023',
      excerpt: 'Bad audio ruins a great video. Learn simple mic setups and advanced editing techniques to capture and clean up flawless sound for your wedding films.',
      link: 'blog-post6.html'
    }
  ];

  return (
    <div id="blog">
      <div className="container">
        <div className="sixteen columns" data-scrollreveal="enter top and move 150px over 1s">
          <div className="section-top">
            <h1>OUR BLOG</h1>
            <div className="subtext-top">LATEST NEWS & INSIGHTS</div>
            <div className="line-dark1"></div>
          </div>
        </div>
      </div>
      <div className="blog-wrap">
        {blogPosts.map((post, index) => (
          <a key={post.id} href={post.link} className="article-post-item-link" data-scrollreveal={index % 2 === 0 ? "enter left and move 250px over 1s" : "enter right and move 250px over 1s"}>
            <div className="article-image">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="article-content">
              <h2>{post.title}</h2>
              <p className="article-meta">{post.author} | {post.date}</p>
              <p className="article-excerpt">{post.excerpt}</p>
            </div>
            <div className="clear"></div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
