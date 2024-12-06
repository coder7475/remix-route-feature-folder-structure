// route: concerts/:city
import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return params.city;
};
const CityUnderConcerts = () => {
  const city = useLoaderData<typeof loader>();
  console.log(city);
  return <div>Dynamic City: {city} under concerts</div>;
};

export default CityUnderConcerts;
