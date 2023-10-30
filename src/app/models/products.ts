
export interface ProductI {
  id: string;
  name: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  ratingAverage: number;
  reviewCount: number
}

export interface ProductDetailsI {
  id: string;
  sellerId: string;
  name: string;
  description: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  quantity: number;
  sold: number;
  reviews: Review[];
  ratingAverage: number;
  reviewCount: number;
}

interface Review {
  _id: string;
  userId: string;
  title: string;
  comment: string;
  rating: number;
  dateCreated: string;
  dateModified: string;
}
