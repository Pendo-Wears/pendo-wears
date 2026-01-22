import { images } from "@/src/assets/images/images";
import { formatDate, formatPrice } from "@/src/lib/priceFormatter";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { Activity } from "react";

const Order = ({ order }: { order: any }) => {
  return (
    <Box
      p={{ xs: "16px", sm: "21px" }}
      border="1px solid #E5E7EB"
      borderRadius={"12px"}
      bgcolor={"#fff"}
    >
      <Box
        display="flex"
        alignItems={"flex-start"}
        justifyContent={"space-between"}
        mb="16px"
      >
        <Box>
          <Typography
            fontSize={14}
            color="#6B7280"
            fontWeight={500}
            fontFamily={"Montserrat"}
          >
            Order #PF{order.id}
          </Typography>
          <Typography
            fontSize={14}
            color="#4B5563"
            fontWeight={500}
            fontFamily={"Montserrat"}
          >
            Placed on {formatDate(order.created)}
          </Typography>
        </Box>
        <Typography
          fontSize={{xs: 12, sm: 14}}
          color="#15803D"
          fontWeight={500}
          fontFamily={"Montserrat"}
          textTransform={"capitalize"}
          py="5px"
          px={{xs: '10px', sm: "12px"}}
          borderRadius={{xs: '5px', sm: "100px"}}
          bgcolor="#DCFCE7"
        >
          {order.status}
        </Typography>
      </Box>
      <Box display="flex" alignItems={"center"} gap="16px">
        <Box
          display="flex"
          alignItems={"flex-start"}
          gap="8px"
          flex={1}
          overflow={"auto"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {order.items.map((item: any) => (
            <Box
              display="flex"
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap="8px"
            >
              <Box position="relative">
                <Box
                  width="60px"
                  height="60px"
                  borderRadius={"8px"}
                  bgcolor="#F3F4F6"
                ></Box>
                <Image
                  src={item.product.image}
                  alt="shirt"
                  width="48"
                  height="48"
                  style={{
                    objectFit: 'cover',
                    objectPosition: "center top",
                    position: "absolute",
                    zIndex: 5,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  fontSize={8}
                  color="#2D3436"
                  fontWeight={600}
                  fontFamily={"Montserrat"}
                  width="60px"
                  whiteSpace={"nowrap"}
                  textOverflow={"ellipsis"}
                  overflow={"hidden"}
                >
                  {item.name}
                </Typography>
                <Typography
                  fontSize={8}
                  color="#6B7280"
                  fontWeight={500}
                  fontFamily={"Montserrat"}
                >
                  {item.quantity} × {formatPrice(item.price)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography
            fontSize={{xs: 16, sm: 20}}
            color="#2D3436"
            fontWeight={700}
            fontFamily={"Montserrat"}
            mb="9px"
          >
            {formatPrice(order.costs.total)}
          </Typography>
          <Activity mode={order.status !== "draft" ? "visible" : "hidden"}>
            <Typography
              fontSize={{xs: 12, sm: 14}}
              color="#00B894"
              fontWeight={500}
              fontFamily={"Montserrat"}
            >
              Track Order
            </Typography>
          </Activity>
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
