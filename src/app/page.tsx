"use client";

import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MultilinkUI from "../components/MultilinkUI";
import { images } from "../assets/images/images";
import Image from "next/image";
import { icons } from "../assets/icons/icons";
import { productsEndpoint } from "../lib/endpoints";
import { useAuth } from "../context/AuthContext";
import { AxiosError } from "axios";
import RequireAuth from "../components/RequireAuth";

const HomePage = () => {
  const { fireAlert } = useAuth();
  const [categories, setCategories] = useState<
    {
      name: string;
      slug: string;
      id: number;
    }[]
  >([]);

  const getCategories = async () => {
    try {
      const result: any = await productsEndpoint.getCategories();
      console.log(result);
      if (result.status === 200) {
        setCategories(result.data);
      }
    } catch (e: any) {
      fireAlert(e.message, "error");
    }
  };

  useEffect(() => {
    getCategories();
    localStorage.removeItem("orderId");
  }, []);
  return (
    <Box>
      <MultilinkUI
        links={categories
          .filter(
            (x) =>
              x.slug !== "noir-gold-collection" &&
              x.slug !== "rhythm-thread-collection" &&
              x.slug !== "heritage-alchemy-collection"
          )
          .map((category) => ({
            name: category.name,
            to: `/collection/${category.slug}?id=${category.id}`,
          }))}
      />
      <Hero />
      <Collections />
      <Products />
      <Shop />
      <OurStory />
      <Tribe />
    </Box>
  );
};

const Hero = () => {
  return (
    <Box position={"relative"} mt="30px">
      <Box
        position={"absolute"}
        bgcolor="rgba(0,0,0,.2)"
        top={0}
        bottom={0}
        left={0}
        right={0}
      ></Box>
      <Box
        height="821px"
        sx={{
          backgroundImage: `url(${images.h1.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          pt="422px"
          zIndex={5}
        >
          <Typography
            fontSize={54}
            fontWeight={700}
            fontFamily={"Montserrat"}
            color="#fff"
            lineHeight={"100%"}
            zIndex={5}
          >
            HERITAGE ALCHEMY COLLECTION
          </Typography>
          <Typography
            mt="8px"
            fontSize={24}
            fontWeight={500}
            fontFamily={"Montserrat"}
            zIndex={5}
            color="#fff"
          >
            Where tradition transforms into timeless design
          </Typography>
          <Link href={"/shop"} style={{ textDecoration: "none", zIndex: 5 }}>
            <Box
              mt="16px"
              width={"180px"}
              height="48px"
              borderRadius={"100px"}
              bgcolor="#fff"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={5}
            >
              <Typography
                fontSize={14}
                fontWeight={700}
                fontFamily={"Montserrat"}
                color="#1A1A1A"
              >
                SHOP
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const Collections = () => {
  return (
    <Box pt="45px" px={{ xs: "16px", sm: "20px", md: "50px" }}>
      <Box
        display="flex"
        alignItems={"center"}
        flexWrap={"wrap"}
        gap="40px"
        justifyContent={"center"}
      >
        <Box
          maxWidth="650px"
          width="100%"
          height="754px"
          borderRadius={"10px"}
          sx={{
            backgroundImage: `url(${images.h6.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          position={"relative"}
          px="43px"
          pb="80px"
          display="flex"
          alignItems={"flex-end"}
          overflow={"hidden"}
        >
          <Box
            position={"absolute"}
            bgcolor="rgba(0,0,0,.2)"
            top={0}
            bottom={0}
            left={0}
            right={0}
          ></Box>
          <Box
            zIndex={5}
            pt="22px"
            borderTop="1px solid #fff"
            display="flex"
            alignItems={"flex-start"}
            gap="28px"
            width="100%"
          >
            <Typography
              fontSize={37}
              fontWeight={700}
              fontFamily={"Montserrat"}
              color="#fff"
              lineHeight={"120%"}
              maxWidth="217px"
            >
              Noir Gold Collection
            </Typography>
            <Image
              src={icons.arrowRight}
              alt="arrow_right"
              width="46"
              height="39"
            />
          </Box>
        </Box>
        <Box
          maxWidth="650px"
          width="100%"
          height="754px"
          borderRadius={"10px"}
          sx={{
            backgroundImage: `url(${images.h3.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          position={"relative"}
          px="43px"
          pb="80px"
          display="flex"
          alignItems={"flex-end"}
          overflow={"hidden"}
        >
          <Box
            position={"absolute"}
            bgcolor="rgba(0,0,0,.2)"
            top={0}
            bottom={0}
            left={0}
            right={0}
          ></Box>
          <Box
            zIndex={5}
            pt="22px"
            borderTop="1px solid #fff"
            display="flex"
            alignItems={"flex-start"}
            gap="28px"
            width="100%"
          >
            <Typography
              fontSize={37}
              fontWeight={700}
              fontFamily={"Montserrat"}
              color="#fff"
              lineHeight={"120%"}
              maxWidth="368px"
            >
              Rhythm & Thread Collection
            </Typography>
            <Image
              src={icons.arrowRight}
              alt="arrow_right"
              width="46"
              height="39"
            />
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        textAlign={"center"}
        my="100px"
        px="20px"
        maxWidth={"1094px"}
        mx="auto"
      >
        <Typography
          fontSize={32}
          fontFamily={"Montserrat"}
          color="#2D2D2D"
          lineHeight={"100%"}
          letterSpacing={".4%"}
        >
          Our collections are crafted with purpose and originality in mind.
          Inspired by Africa's timeless artistry.
        </Typography>
        <Typography
          mt="10px"
          fontSize={24}
          fontFamily={"Montserrat"}
          color="#2D2D2D"
          lineHeight={"100%"}
          p="10px"
          borderBottom={"2px solid #2D2D2D"}
        >
          Discover all our collections
        </Typography>
      </Box>
    </Box>
  );
};

const Products = () => {
  return (
    <Box bgcolor="#000" pb="112px">
      <Typography
        fontSize={150}
        fontFamily={"Cormorant Garamond"}
        fontWeight={600}
        color="#D0950F"
        lineHeight={"100%"}
        py="50px"
        textAlign={"center"}
      >
        OUR PRODUCT
      </Typography>
      <Box
        width="100%"
        height="520px"
        mb="60px"
        sx={{
          backgroundColor: "#F3EFE9",
          backgroundImage: `url(${images.h6.src})`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "700px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          pb: "30px",
        }}
      >
        <Typography
          fontSize={36}
          fontFamily={"Montserrat"}
          color="#fff"
          lineHeight={"140%"}
          letterSpacing={"4%"}
          fontWeight={700}
        >
          HOODIE
        </Typography>
        <Typography
          fontSize={16}
          fontFamily={"Montserrat"}
          fontWeight={500}
          color="#fff"
          lineHeight={"140%"}
          p="15px"
          borderBottom={"1px solid #fff"}
        >
          See More
        </Typography>
      </Box>
      <Box
        width="100%"
        height="520px"
        mb="60px"
        sx={{
          // backgroundColor: "#F3EFE9",
          backgroundImage: `url(${images.h4.src})`,
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          pb: "30px",
        }}
      >
        <Typography
          fontSize={36}
          fontFamily={"Montserrat"}
          color="#fff"
          lineHeight={"140%"}
          letterSpacing={"4%"}
          fontWeight={700}
        >
          TEE
        </Typography>
        <Typography
          fontSize={16}
          fontFamily={"Montserrat"}
          fontWeight={500}
          color="#fff"
          lineHeight={"140%"}
          p="15px"
          borderBottom={"1px solid #fff"}
        >
          See More
        </Typography>
      </Box>
      <Box
        width="100%"
        height="520px"
        sx={{
          backgroundColor: "#F3EFE9",
          backgroundImage: `url(${images.h2.src})`,
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          pb: "30px",
        }}
      >
        <Typography
          fontSize={36}
          fontFamily={"Montserrat"}
          color="#fff"
          lineHeight={"140%"}
          letterSpacing={"4%"}
          fontWeight={700}
        >
          JOGGERS
        </Typography>
        <Typography
          fontSize={16}
          fontFamily={"Montserrat"}
          fontWeight={500}
          color="#fff"
          lineHeight={"140%"}
          p="15px"
          borderBottom={"1px solid #fff"}
        >
          See More
        </Typography>
      </Box>
    </Box>
  );
};

const Shop = () => {
  return (
    <Box py="100px" px={{ xs: "16px", sm: "20px", md: "50px" }}>
      <Box
        width="100%"
        height="472px"
        bgcolor={"#CFCABE80"}
        borderRadius={"10px"}
        pb="40px"
        display="flex"
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        position={"relative"}
      >
        <Image
          src={images.s1}
          alt="shirt"
          width="97"
          height="134"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "72px",
          }}
        />

        <Image
          src={images.s2}
          alt="shirt"
          width="242"
          height="261"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "162px",
          }}
        />
        <Image
          src={images.s3}
          alt="shirt"
          width="546"
          height="474"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Image
          src={images.s4}
          alt="shirt"
          width="234"
          height="236"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "183px",
          }}
        />
        <Image
          src={images.c1}
          alt="shirt"
          width="133"
          height="129"
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            right: "44px",
          }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          zIndex={5}
        >
          <Typography
            fontSize={54}
            fontWeight={700}
            fontFamily={"Montserrat"}
            color="#fff"
            lineHeight={"100%"}
            zIndex={5}
          >
            FEEL THE VIBES
          </Typography>
          <Typography
            mt="8px"
            fontSize={24}
            fontWeight={500}
            fontFamily={"Montserrat"}
            zIndex={5}
            color="#fff"
          >
            Clean, confident, and modern
          </Typography>
          <Link href="/shop" style={{ textDecoration: "none", zIndex: 5 }}>
            <Box
              mt="16px"
              width={"180px"}
              height="48px"
              borderRadius={"100px"}
              bgcolor="#fff"
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
              zIndex={5}
            >
              <Typography
                fontSize={14}
                fontWeight={700}
                fontFamily={"Montserrat"}
                color="#1A1A1A"
              >
                SHOP
              </Typography>
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const OurStory = () => {
  return (
    <Box
      px={{ xs: "16px", sm: "20px", md: "50px" }}
      pb="169px"
      display={"flex"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      alignItems={"center"}
    >
      <Box
        width="575px"
        height="698px"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
      >
        <Typography
          fontSize={150}
          fontWeight={700}
          fontFamily={"Montserrat"}
          color="#E3E3DA"
          lineHeight={"100%"}
        >
          OUR STORY
        </Typography>
        <Typography fontSize={24} fontFamily={"Montserrat"} color="#656565">
          Every thread tells a story. Every pattern carries the wisdom of our
          ancestors. At Pendo, we don't just create clothing — we craft cultural
          narratives that bridge the gap between ancient African artistry and
          contemporary streetwear.
        </Typography>
        <Link href="/about-us" style={{ textDecoration: "none" }}>
          <Box
            width="100%"
            height="52px"
            bgcolor="#000"
            borderRadius={"100px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Typography
              fontSize={16}
              fontFamily={"Montserrat"}
              color="#fff"
              lineHeight={"100%"}
              fontWeight={500}
            >
              LEARN MORE ABOUT US
            </Typography>
          </Box>
        </Link>
      </Box>
      <Box
        width="642px"
        height="698px"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"flex-end"}
        alignItems={"flex-end"}
        position="relative"
      >
        <Image
          src={images.h5}
          alt="shirt"
          width="456"
          height="684"
          style={{
            position: "absolute",
            right: "93px",
          }}
        />
        <Box
          width="615px"
          height="510px"
          bgcolor="#E3E0D6"
          sx={{ borderTopLeftRadius: "200px" }}
        ></Box>
      </Box>
    </Box>
  );
};

const Tribe = () => {
  return (
    <Box
      width="100%"
      pt="70px"
      pb="50px"
      bgcolor="#CFCABE"
      display="flex"
      alignItems={"center"}
      flexDirection={"column"}
      textAlign="center"
    >
      <Typography
        fontSize={40}
        fontWeight={700}
        fontFamily={"Montserrat"}
        color="#fff"
      >
        Join The Tribe
      </Typography>
      <Typography
        fontSize={32}
        fontFamily={"Montserrat"}
        color="#fff"
        my="32px"
      >
        Inspire me with all the latest Pendo news
      </Typography>
      <Box display="flex" alignItems={"center"} gap="16px">
        <TextField
          fullWidth
          variant="outlined"
          required
          placeholder="Enter your email"
          value={""}
          // onChange={(e) => {}}
          sx={{
            bgcolor: "transparent",
            borderRadius: "6px",
            width: "370px",
            height: "60px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderRadius: "8px",
                border: "1px solid #fff", // remove border normally
              },
              "&:hover fieldset": {
                border: "1px solid #fff", // optional: show on hover
              },
              "&.Mui-focused fieldset": {
                border: "1px solid #fff", // show border on focus
              },
            },
            input: {
              fontFamily: "Montserrat",
              "&::placeholder": {
                color: "#fff", // placeholder color
                fontFamily: "Montserrat",
                fontSize: "16px",
                opacity: 1, // show placeholder fully
              },
            },
          }}
        />
        <Box
          width="180px"
          height="62px"
          bgcolor="#fff"
          borderRadius={"5px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography
            fontSize={16}
            color="#000"
            lineHeight={"100%"}
            fontWeight={600}
            fontFamily={"Montserrat"}
          >
            JOIN NOW
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
