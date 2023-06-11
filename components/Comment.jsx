// import AlertToast from "@/components/toast/AlertToast";
// import useCreateComment from "@/hooks/comment/useCreateComment";
// import { useQueryClient } from "@tanstack/react-query";
// import autosize from "autosize";
// import { useSession } from "next-auth/react";
import pb from "@/lib/pocketbase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";

export default function Comment({ restoId }) {
  //   const { data: session } = useSession();
  const [body, setBody] = useState(``);
  const [isLoading, setIsLoading] = useState(false);
  const [rating, setRating] = useState(3);
  const router = useRouter();
  //   const { mutateCreateComment, isLoading } = useCreateComment();
  //   const queryClient = useQueryClient();

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  const handleSubmit = async () => {
    if (!body || body == "") return;
    setIsLoading(true);

    const data = {
      mesagge: body,
      rating: rating,
      restaurant: restoId,
      user: pb.authStore.model.id,
    };

    try {
      const record = await pb.collection("rating").create(data);
      router.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mt-12 flex flex-col">
        <div className="divider" />
        <div className="w-full flex gap-1">
          <div className="w-full flex flex-col gap-2 text-black">
            <p>
              Write a review{" "}
              {/* <span className="font-semibold">{session.user.name}</span> */}
              {/* <span className="font-semibold ">{pb.authStore.model.email}</span> */}
            </p>
            <textarea
              className=" w-full px-4 pr-16 py-2 h-32 border rounded focus:outline-none resize-none overflow-x-hidden"
              placeholder="What do you think about this place?"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <div className="rating">
              {new Array(5).fill("").map((_, idx) => (
                <input
                  key={idx}
                  onClick={() => setRating(idx + 1)}
                  // checked={}
                  className={`mask mask-star-2 ${
                    idx + 1 <= rating ? "bg-orange-400" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end my-2">
        <button
          className="px-4 py-2 bg-primary text-sm text-white font-semibold capitalize tracking-wider rounded-full border-2 border-primary hover:bg-[#554f95] transition disabled:opacity-50"
          disabled={isLoading}
          onClick={handleSubmit}
        >
          Comment
        </button>
      </div>
    </>
  );
}
