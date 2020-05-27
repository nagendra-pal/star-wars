// All types related to search defined here

export type SearchPropsType = {};

export interface SearchStateType {
    query: string;
    results: [];
    loading: boolean;
    message: string;
    count: number;
    user: string;
};

export interface PlanetType {
    name: string;
    rotation_period: number;
    orbital_period: number;
    diameter: number;
    climate: string;
    terrain: string;
    population: number;
    residents: Array<string>;
    films: Array<string>;
    created: Date;
    edited: Date;
};

export interface PlanetListType {
    planetList: Array<PlanetType>;
};

export interface PlanetListItemType {
    planet: PlanetType;
};
