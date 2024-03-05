import React, { useEffect } from "react";
import axios from "axios";

function ApiTest() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.spacexdata.com/v4/launches/upcoming"
        );

        // Axios automatically checks for a successful response (status 2xx)
        // so you don't need to explicitly check `response.ok`.

        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default ApiTest;
