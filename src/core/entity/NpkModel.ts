export interface NPKModel {
  id: number;
  createdAt: string;
}

export interface NitrogenData extends NPKModel {
  nitrogen: number;
}

export interface PhosphorusData extends NPKModel {
  phosphorus: number;
}

export interface PotassiumData extends NPKModel {
  potassium: number;
}
