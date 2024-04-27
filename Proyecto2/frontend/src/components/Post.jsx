import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@nextui-org/react";
import { useState } from "react";

export default function Post({ name, email, text, category, image }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5">
      <Card>
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar isBordered radius="full" size="md" src={image || "/avatars/avatar-1.png"} />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">{name}María</h4>
              <h5 className="text-small tracking-tight text-default-400">{email}maria@gmail.com</h5>
              <h6 className="text-small tracking-tight text-default-300">{email}Ingeniería en Sistemas</h6>
            </div>
          </div>
          <Button
          className={isLiked ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isLiked ? "bordered" : "solid"}
          onPress={() => setIsLiked(!isLiked)}
        >
          {isLiked ? "Dislike" : "Like"}
        </Button>
        </CardHeader> 
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            Pasen imágenes graciosas. 
          </p>
          <span className="pt-2">
            #{category} 
            <span className="py-2" aria-label="computer" role="img">
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">4</p>
            <p className=" text-default-400 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-400 text-small">97.1K</p>
            <p className="text-default-400 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
