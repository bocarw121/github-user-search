export const breakPoints = {
  containerWidth: {
    base: '327px',
    md: '573px',
    lg: '730px',
  },
};

const userCardGrid = {
  base: `
        "avatar name"
         ". date"
         "bio bio"
         "stats stats"
         "links links"
        `,
  md: `
         "avatar name"
         "avatar date"
         "bio bio"
         "stats stats"
         "links links"
         `,

  lg: `
        "avatar name date"
        "avatar bio bio"
        ". stats stats"
        ". links links"
        `,
};

const linkAreaGrid = {
  base: `
        "location"
        "blog"
        "twitter"
        "work"
        `,
  md: `
        "location twitter"
        "blog work"
        `,
  lg: `
        "location twitter"
        "blog work"
        `,
};

export const GridAreas = {
  userCard: {
    grid: userCardGrid,
    columns: {
      base: '100px 1fr',
      md: '150px 1fr',
      lg: '150px 1fr',
    },
  },
  linkArea: linkAreaGrid,
};
