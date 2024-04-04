import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IHome } from "@/app/types/home.types";
import Link from "next/link";
import Image from "next/image";
export default function HomeCard({ item }: { item: IHome }) {
  return (
    <Card className="md:max-h-[520px] h-[100%] w-[100%] flex flex-col">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item?.urlToImage ? item?.urlToImage : "/no_image.jpg"}
          className="md:h-[250px]"
        />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" className="md:max-h-[95px] overflow-hidden">
          {item?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="md:h-[150px] overflow-y-auto ">
          {item?.description}
        </Typography>
      </CardContent>
      <CardActions className="justify-self-end">
        <Button size="small">Share</Button>
        <Link href={item?.url}>
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
