import { Image, useColorMode } from "@chakra-ui/react";

export function Separator() {
  const { colorMode } = useColorMode();

  return (
    <Image
      w={5}
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACzUlEQVR4nO3ZW6iUVRQH8J+BpwgvGUYiXh56SQzRh+ohkNDTS/hgFhoE4WsQCEGFEaZgQRAIQWKhZl4IwQeF3goSL1BRLyFIiVaKkhfUJBuPlz75YA8sNjNnLmeaOWPzhwUze7HX/q+9LnvPHgYYYIBeYTpewR78ggp+xceYYRziPjyJdfgOd1DUkStYbBzgYbyML3B+FMJFDbmM2d0mPAGL8A6O4PYoBG/hcCJaHfsBZ8P3Td0gPRUvYRvONdjVP/E5VmIangm6O8n54TB2MaVex7EAb+Ng2slmUmJnilAV5eejQb8rjMeNeLoThCfjBXyGMw2Ilru2G1+GsUqNfF4R9DcwN+i2B936sRAvQ7ofIw1I/4wNabfKkE/EiaD/MLM7MbXOIslHYfxZHAi679slX3aPm02kxsVUBxGvB/0lPJTpXwv6m3gT+/BXDfvX2iH/eAp71ci/+Akb8XzWOdZkc6fgQtC/keknpWJupm4qqdZaxo5g5BjmB90HQXcSQ9ncjUH/G+7Ho1iNvZnzRQ05hU+wDA9qE2frdIFZ+CfoyjSLmInrQV+euD+mCNYjPIKvU6Tm6RBi0ZYhr2JbdujEtvhI1nlGk9P4FMsz+x3DybDYU2nsiexkXZLuNu81cbcpC/VbvJXs/OfYERYvL18lvsrC3uhuU6bhVryYCrurWJX1+FiY9aQ8kQ9hLRZm6dV1TGsyl7slI3i/VSeKcSY3+t2BYiwO9BLFwAGDCPRfCm1Il7bd6f7Udw5Uwty/8S4eaMNOzxyo1QLLn6KvjtFWTx2oyjd4rJ8dKHC8GzyKgQPurRQ6009FXOn3Nrq+3w+yTqJol0f8AZ+//XQLQ4FDyaclnM5eIHqB4cDh91Ynb8le2Ia7GIkhPJfWrXLY3KqRuXUeW3shVzGnnZ0YHgdOXMVSY8CcFL4/Gvzn1Um5ndbb3O7ODzDA/wV3AQPzjvLojzRCAAAAAElFTkSuQmCC"
    ></Image>
  );
}
