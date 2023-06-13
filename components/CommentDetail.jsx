import pb from "@/lib/pocketbase";

export default function CommentDetail({ comment }) {
  return (
    <>
      <div>
        <div className="post border border-black text-black rounded m-3 p-4">
          <div className="p-3 leading-8">
            <div className="flex justify-between">
              <div className="flex gap-2 mb-2">
                <div className="avatar ">
                  <div className="w-9 rounded-full">
                    <img
                      src={pb.getFileUrl(
                        comment.expand.user,
                        comment.expand.user.avatar
                      )}
                    />
                  </div>
                </div>
                <header className="comment-header font-bold text-xl">
                  {comment.expand.user.username}
                </header>
              </div>
              <div className="rating">
                {new Array(5).fill("").map((_, idx) => (
                  <input
                    key={idx}
                    //   onClick={() => setRating(idx + 1)}
                    // checked={}
                    className={`mask mask-star-2 ${
                      idx + 1 <= comment.rating ? "bg-orange-400" : ""
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="post-body">{comment.mesagge}</div>
          </div>
        </div>
      </div>
    </>
  );
}
