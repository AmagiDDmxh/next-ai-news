import z from "zod";
import { headers as dynamic } from "next/headers";
import { Stories } from "@/components/stories";

const SearchParamsSchema = z.object({
  p: z.coerce.number().min(1).max(100).optional().default(1),
  newest: z.enum(["", "1"]).optional(),
  type: z.enum(["ask", "show", "jobs", "story"]).optional().default("story"),
});

/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Clo34SuEDxI
 */

export default async function StoriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  dynamic();

  const query = SearchParamsSchema.safeParse(searchParams);

  if (!query.success) {
    return <p>Bad request</p>;
  }

  const isNewest = query.data.newest === "1";
  const type = query.data.type;
  const page = query.data.p;

  return (
    <>
      <Stories page={page} isNewest={isNewest} type={type} />
    </>
  );
}