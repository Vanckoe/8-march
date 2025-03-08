export type School = {
  id: number;
  name: string;
  address: string;
};
export type City = {
  city: string;
  schools: School[];
};

export type CitiesData = {
  cities: City[];
};

export type Users = {
  id: number;
  phone: string;
  name: string;
  school: string | null;
  city: string;
  country_code: string;
  avatar: string;
  exp: number;
  jcoins: number;
  course: string;
  created: string;
  email?: string;
};

export type NewsType = {
  id: number;
  title: string;
  preview_image: string;
  created_at: string;
};

export type Employees = {
  id: number;
  name: string;
  name_ch: string;
  position: string;
  position_ch: string;
  photo: string;
  city: string;
  description: string;
  description_ch: string;
};
