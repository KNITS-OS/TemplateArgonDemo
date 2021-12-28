const mockResponse = {
  data: [
    {
      id: 1,
      pdmId: 1,
      firstName: "Hamli",
      lastName: "Larvent",
      internationalName: "Hamlin Larvent",
      title: "Senior Developer",
      email: "hlarvent0@nba.com",
      businessUnit: "Legal",
      managementGroup: "Sales",
      companyCode: "SIG YZ-FG",
      costCenter: "TWA02GI",
      country: "Philippines",
      birthDate: "12/18/1984",
      companyPhone: "966-693-7291",
      companyMobilePhone: "814-734-9400",
      gender: "Non-binary",
      startDate: "11/5/2008",
      endDate: null,
      dateOfLeave: null,
      nationality: null,
      officeAddressCountry: null,
      officeAddressCity: "Calaya",
      officeAddressStreet: "1 Bultman Trail",
      onboardingDate: "5/25/2019",
      offboardingDate: "3/19/2019",
    },
    {
      id: 2,
      pdmId: 2,
      firstName: "Rosetta",
      lastName: "Sandcroft",
      internationalName: "Rosetta Sandcroft",
      title: "Budget/Accounting Analyst II",
      email: "rsandcroft1@elpais.com",
      businessUnit: "Road Logistics",
      managementGroup: "Legal",
      companyCode: "BPS LJ-JU",
      costCenter: "YVL62KS",
      country: "Czech Republic",
      birthDate: "9/22/1979",
      companyPhone: "102-294-4529",
      companyMobilePhone: "959-551-6325",
      gender: "Non-binary",
      startDate: "1/25/1992",
      endDate: null,
      dateOfLeave: null,
      nationality: null,
      officeAddressCountry: null,
      officeAddressCity: "Rychnov nad Kněžnou",
      officeAddressStreet: "65 Cascade Road",
      onboardingDate: "11/29/2020",
      offboardingDate: "10/12/2020",
    },
    {
      id: 3,
      pdmId: 3,
      firstName: "Gayle",
      lastName: "Haithwaite",
      internationalName: "Gayle Haithwaite",
      title: "VP Accounting",
      email: "ghaithwaite2@fc2.com",
      businessUnit: "IT",
      managementGroup: "Sales",
      companyCode: "NMS GF-XT",
      costCenter: "DBU32UE",
      country: "Indonesia",
      birthDate: "6/27/1993",
      companyPhone: "826-504-5163",
      companyMobilePhone: "488-645-3398",
      gender: "Genderqueer",
      startDate: "8/30/2000",
      endDate: null,
      dateOfLeave: null,
      nationality: null,
      officeAddressCountry: null,
      officeAddressCity: "Kenarilang",
      officeAddressStreet: "11403 Ludington Place",
      onboardingDate: "7/28/2020",
      offboardingDate: "4/17/2021",
    },
    {
      id: 4,
      pdmId: 4,
      firstName: "Coletta",
      lastName: "Kimbury",
      internationalName: "Coletta Kimbury",
      title: "Registered Nurse",
      email: "ckimbury3@uol.com.br",
      businessUnit: "Legal",
      managementGroup: "Sales",
      companyCode: "WES UA-AQ",
      costCenter: "XMK32KT",
      country: "Moldova",
      birthDate: "4/24/1971",
      companyPhone: "223-290-1201",
      companyMobilePhone: "975-668-6082",
      gender: "Agender",
      startDate: "7/14/1996",
      endDate: null,
      dateOfLeave: null,
      nationality: null,
      officeAddressCountry: null,
      officeAddressCity: "Floreşti",
      officeAddressStreet: "09 Lindbergh Terrace",
      onboardingDate: "4/10/2019",
      offboardingDate: "4/20/2019",
    },
    {
      id: 5,
      pdmId: 5,
      firstName: "Lebbie",
      lastName: "Yesenev",
      internationalName: "Lebbie Yesenev",
      title: "Junior Executive",
      email: "lyesenev4@discovery.com",
      businessUnit: "Road Logistics",
      managementGroup: "Sales",
      companyCode: "GMD WZ-ZU",
      costCenter: "UGV02JG",
      country: "Malta",
      birthDate: "10/15/1989",
      companyPhone: "489-371-7170",
      companyMobilePhone: "402-302-7355",
      gender: "Genderqueer",
      startDate: "4/23/1992",
      endDate: null,
      dateOfLeave: null,
      nationality: null,
      officeAddressCountry: null,
      officeAddressCity: "Kirkop",
      officeAddressStreet: "1 Gulseth Lane",
      onboardingDate: "3/28/2019",
      offboardingDate: "2/17/2019",
    },
  ],
};

const mockData = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default mockData;
