import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";
import { Pool } from "pg";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const CDN = "https://dvcammctw5or7.cloudfront.net/team-badges";

async function main() {
  console.log("🌱 Seeding database...");

  // Groups
  const groups = await Promise.all([
    prisma.group.upsert({
      where: { name: "A" },
      update: {},
      create: { name: "A", displayOrder: 1 },
    }),
    prisma.group.upsert({
      where: { name: "B" },
      update: {},
      create: { name: "B", displayOrder: 2 },
    }),
    prisma.group.upsert({
      where: { name: "C" },
      update: {},
      create: { name: "C", displayOrder: 3 },
    }),
    prisma.group.upsert({
      where: { name: "D" },
      update: {},
      create: { name: "D", displayOrder: 4 },
    }),
    prisma.group.upsert({
      where: { name: "E" },
      update: {},
      create: { name: "E", displayOrder: 5 },
    }),
    prisma.group.upsert({
      where: { name: "F" },
      update: {},
      create: { name: "F", displayOrder: 6 },
    }),
    prisma.group.upsert({
      where: { name: "G" },
      update: {},
      create: { name: "G", displayOrder: 7 },
    }),
    prisma.group.upsert({
      where: { name: "H" },
      update: {},
      create: { name: "H", displayOrder: 8 },
    }),
    prisma.group.upsert({
      where: { name: "I" },
      update: {},
      create: { name: "I", displayOrder: 9 },
    }),
    prisma.group.upsert({
      where: { name: "J" },
      update: {},
      create: { name: "J", displayOrder: 10 },
    }),
    prisma.group.upsert({
      where: { name: "K" },
      update: {},
      create: { name: "K", displayOrder: 11 },
    }),
    prisma.group.upsert({
      where: { name: "L" },
      update: {},
      create: { name: "L", displayOrder: 12 },
    }),
  ]);

  console.log(`✅ ${groups.length} groups created`);

  const getGroup = (name: string) => groups.find((g) => g.name === name)!;

  const allTeams = [
    // GROUP A
    {
      name: "Mexico",
      slug: "mexico",
      fifaCode: "MEX",
      groupId: getGroup("A").id,
      colorPrimary: "#006847",
      colorSecondary: "#CE1126",
      badgeUrl: `${CDN}/mex.png`,
    },
    {
      name: "South Africa",
      slug: "south-africa",
      fifaCode: "RSA",
      groupId: getGroup("A").id,
      colorPrimary: "#007749",
      colorSecondary: "#FFB81C",
      badgeUrl: `${CDN}/rsa.png`,
    },
    {
      name: "Korea Republic",
      slug: "korea-republic",
      fifaCode: "KOR",
      groupId: getGroup("A").id,
      colorPrimary: "#CD2E3A",
      colorSecondary: "#0047A0",
      badgeUrl: `${CDN}/kor.png`,
    },
    {
      name: "Czechia",
      slug: "czechia",
      fifaCode: "CZE",
      groupId: getGroup("A").id,
      colorPrimary: "#D7141A",
      colorSecondary: "#11457E",
      badgeUrl: `${CDN}/cze.png`,
    },

    // GROUP B
    {
      name: "Canada",
      slug: "canada",
      fifaCode: "CAN",
      groupId: getGroup("B").id,
      colorPrimary: "#FF0000",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/can.png`,
    },
    {
      name: "Bosnia And Herzegovina",
      slug: "bosnia-and-herzegovina",
      fifaCode: "BIH",
      groupId: getGroup("B").id,
      colorPrimary: "#002395",
      colorSecondary: "#FECB00",
      badgeUrl: `${CDN}/bih.png`,
    },
    {
      name: "Qatar",
      slug: "qatar",
      fifaCode: "QAT",
      groupId: getGroup("B").id,
      colorPrimary: "#8D1B3D",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/qat.png`,
    },
    {
      name: "Switzerland",
      slug: "switzerland",
      fifaCode: "SUI",
      groupId: getGroup("B").id,
      colorPrimary: "#FF0000",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/sui.png`,
    },

    // GROUP C
    {
      name: "Brazil",
      slug: "brazil",
      fifaCode: "BRA",
      groupId: getGroup("C").id,
      colorPrimary: "#009739",
      colorSecondary: "#FEDD00",
      badgeUrl: `${CDN}/bra.png`,
    },
    {
      name: "Morocco",
      slug: "morocco",
      fifaCode: "MAR",
      groupId: getGroup("C").id,
      colorPrimary: "#C1272D",
      colorSecondary: "#006233",
      badgeUrl: `${CDN}/mar.png`,
    },
    {
      name: "Haiti",
      slug: "haiti",
      fifaCode: "HAI",
      groupId: getGroup("C").id,
      colorPrimary: "#00209F",
      colorSecondary: "#D21034",
      badgeUrl: `${CDN}/hai.png`,
    },
    {
      name: "Scotland",
      slug: "scotland",
      fifaCode: "SCO",
      groupId: getGroup("C").id,
      colorPrimary: "#005EB8",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/sco.png`,
    },

    // GROUP D
    {
      name: "USA",
      slug: "usa",
      fifaCode: "USA",
      groupId: getGroup("D").id,
      colorPrimary: "#002868",
      colorSecondary: "#BF0A30",
      badgeUrl: `${CDN}/usa.png`,
    },
    {
      name: "Paraguay",
      slug: "paraguay",
      fifaCode: "PAR",
      groupId: getGroup("D").id,
      colorPrimary: "#D52B1E",
      colorSecondary: "#0038A8",
      badgeUrl: `${CDN}/par.png`,
    },
    {
      name: "Australia",
      slug: "australia",
      fifaCode: "AUS",
      groupId: getGroup("D").id,
      colorPrimary: "#00008B",
      colorSecondary: "#FFCD00",
      badgeUrl: `${CDN}/aus.png`,
    },
    {
      name: "Türkiye",
      slug: "turkiye",
      fifaCode: "TUR",
      groupId: getGroup("D").id,
      colorPrimary: "#E30A17",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/tur.png`,
    },

    // GROUP E
    {
      name: "Germany",
      slug: "germany",
      fifaCode: "GER",
      groupId: getGroup("E").id,
      colorPrimary: "#000000",
      colorSecondary: "#DD0000",
      badgeUrl: `${CDN}/ger.png`,
    },
    {
      name: "Curaçao",
      slug: "curacao",
      fifaCode: "CUW",
      groupId: getGroup("E").id,
      colorPrimary: "#002B7F",
      colorSecondary: "#F9E814",
      badgeUrl: `${CDN}/cuw.png`,
    },
    {
      name: "Côte D'Ivoire",
      slug: "cote-divoire",
      fifaCode: "CIV",
      groupId: getGroup("E").id,
      colorPrimary: "#FF8200",
      colorSecondary: "#009A44",
      badgeUrl: `${CDN}/civ.png`,
    },
    {
      name: "Ecuador",
      slug: "ecuador",
      fifaCode: "ECU",
      groupId: getGroup("E").id,
      colorPrimary: "#FFD100",
      colorSecondary: "#034EA2",
      badgeUrl: `${CDN}/ecu.png`,
    },

    // GROUP F
    {
      name: "Netherlands",
      slug: "netherlands",
      fifaCode: "NED",
      groupId: getGroup("F").id,
      colorPrimary: "#FF6B00",
      colorSecondary: "#21468B",
      badgeUrl: `${CDN}/ned.png`,
    },
    {
      name: "Japan",
      slug: "japan",
      fifaCode: "JPN",
      groupId: getGroup("F").id,
      colorPrimary: "#BC002D",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/jpn.png`,
    },
    {
      name: "Sweden",
      slug: "sweden",
      fifaCode: "SWE",
      groupId: getGroup("F").id,
      colorPrimary: "#006AA7",
      colorSecondary: "#FECC00",
      badgeUrl: `${CDN}/swe.png`,
    },
    {
      name: "Tunisia",
      slug: "tunisia",
      fifaCode: "TUN",
      groupId: getGroup("F").id,
      colorPrimary: "#E70013",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/tun.png`,
    },

    // GROUP G
    {
      name: "Belgium",
      slug: "belgium",
      fifaCode: "BEL",
      groupId: getGroup("G").id,
      colorPrimary: "#000000",
      colorSecondary: "#FDDA24",
      badgeUrl: `${CDN}/bel.png`,
    },
    {
      name: "Egypt",
      slug: "egypt",
      fifaCode: "EGY",
      groupId: getGroup("G").id,
      colorPrimary: "#C8102E",
      colorSecondary: "#000000",
      badgeUrl: `${CDN}/egy.png`,
    },
    {
      name: "IR Iran",
      slug: "ir-iran",
      fifaCode: "IRN",
      groupId: getGroup("G").id,
      colorPrimary: "#239F40",
      colorSecondary: "#DA0000",
      badgeUrl: `${CDN}/irn.png`,
    },
    {
      name: "New Zealand",
      slug: "new-zealand",
      fifaCode: "NZL",
      groupId: getGroup("G").id,
      colorPrimary: "#000000",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/nzl.png`,
    },

    // GROUP H
    {
      name: "Spain",
      slug: "spain",
      fifaCode: "ESP",
      groupId: getGroup("H").id,
      colorPrimary: "#AA151B",
      colorSecondary: "#F1BF00",
      badgeUrl: `${CDN}/esp.png`,
    },
    {
      name: "Cabo Verde",
      slug: "cabo-verde",
      fifaCode: "CPV",
      groupId: getGroup("H").id,
      colorPrimary: "#003893",
      colorSecondary: "#CF2027",
      badgeUrl: `${CDN}/cpv.png`,
    },
    {
      name: "Saudi Arabia",
      slug: "saudi-arabia",
      fifaCode: "KSA",
      groupId: getGroup("H").id,
      colorPrimary: "#006C35",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/ksa.png`,
    },
    {
      name: "Uruguay",
      slug: "uruguay",
      fifaCode: "URU",
      groupId: getGroup("H").id,
      colorPrimary: "#0038A8",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/uru.png`,
    },

    // GROUP I
    {
      name: "France",
      slug: "france",
      fifaCode: "FRA",
      groupId: getGroup("I").id,
      colorPrimary: "#002395",
      colorSecondary: "#ED2939",
      badgeUrl: `${CDN}/fra.png`,
    },
    {
      name: "Senegal",
      slug: "senegal",
      fifaCode: "SEN",
      groupId: getGroup("I").id,
      colorPrimary: "#00853F",
      colorSecondary: "#FDEF42",
      badgeUrl: `${CDN}/sen.png`,
    },
    {
      name: "Iraq",
      slug: "iraq",
      fifaCode: "IRQ",
      groupId: getGroup("I").id,
      colorPrimary: "#007A3D",
      colorSecondary: "#CE1126",
      badgeUrl: `${CDN}/irq.png`,
    },
    {
      name: "Norway",
      slug: "norway",
      fifaCode: "NOR",
      groupId: getGroup("I").id,
      colorPrimary: "#EF2B2D",
      colorSecondary: "#002868",
      badgeUrl: `${CDN}/nor.png`,
    },

    // GROUP J
    {
      name: "Argentina",
      slug: "argentina",
      fifaCode: "ARG",
      groupId: getGroup("J").id,
      colorPrimary: "#75AADB",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/arg.png`,
    },
    {
      name: "Algeria",
      slug: "algeria",
      fifaCode: "ALG",
      groupId: getGroup("J").id,
      colorPrimary: "#006233",
      colorSecondary: "#D21034",
      badgeUrl: `${CDN}/alg.png`,
    },
    {
      name: "Austria",
      slug: "austria",
      fifaCode: "AUT",
      groupId: getGroup("J").id,
      colorPrimary: "#ED2939",
      colorSecondary: "#FFFFFF",
      badgeUrl: `${CDN}/aut.png`,
    },
    {
      name: "Jordan",
      slug: "jordan",
      fifaCode: "JOR",
      groupId: getGroup("J").id,
      colorPrimary: "#007A3D",
      colorSecondary: "#000000",
      badgeUrl: `${CDN}/jor.png`,
    },

    // GROUP K
    {
      name: "Portugal",
      slug: "portugal",
      fifaCode: "POR",
      groupId: getGroup("K").id,
      colorPrimary: "#006600",
      colorSecondary: "#FF0000",
      badgeUrl: `${CDN}/por.png`,
    },
    {
      name: "Congo DR",
      slug: "congo-dr",
      fifaCode: "COD",
      groupId: getGroup("K").id,
      colorPrimary: "#007FFF",
      colorSecondary: "#F7D618",
      badgeUrl: `${CDN}/cod.png`,
    },
    {
      name: "Uzbekistan",
      slug: "uzbekistan",
      fifaCode: "UZB",
      groupId: getGroup("K").id,
      colorPrimary: "#1EB53A",
      colorSecondary: "#0099B5",
      badgeUrl: `${CDN}/uzb.png`,
    },
    {
      name: "Colombia",
      slug: "colombia",
      fifaCode: "COL",
      groupId: getGroup("K").id,
      colorPrimary: "#FCD116",
      colorSecondary: "#003893",
      badgeUrl: `${CDN}/col.png`,
    },

    // GROUP L
    {
      name: "England",
      slug: "england",
      fifaCode: "ENG",
      groupId: getGroup("L").id,
      colorPrimary: "#FFFFFF",
      colorSecondary: "#CF081F",
      badgeUrl: `${CDN}/eng.png`,
    },
    {
      name: "Croatia",
      slug: "croatia",
      fifaCode: "CRO",
      groupId: getGroup("L").id,
      colorPrimary: "#FF0000",
      colorSecondary: "#0000FF",
      badgeUrl: `${CDN}/cro.png`,
    },
    {
      name: "Ghana",
      slug: "ghana",
      fifaCode: "GHA",
      groupId: getGroup("L").id,
      colorPrimary: "#006B3F",
      colorSecondary: "#FCD116",
      badgeUrl: `${CDN}/gha.png`,
    },
    {
      name: "Panama",
      slug: "panama",
      fifaCode: "PAN",
      groupId: getGroup("L").id,
      colorPrimary: "#005293",
      colorSecondary: "#DA121A",
      badgeUrl: `${CDN}/pan.png`,
    },
  ];

  for (const team of allTeams) {
    await prisma.team.upsert({
      where: { slug: team.slug },
      update: {
        name: team.name,
        fifaCode: team.fifaCode,
        groupId: team.groupId,
        colorPrimary: team.colorPrimary,
        colorSecondary: team.colorSecondary,
        badgeUrl: team.badgeUrl,
      },
      create: team,
    });
  }

  console.log(`✅ ${allTeams.length} teams created`);

  const hashedPassword = await bcrypt.hash("StickerLab@2026!", 10);
  await prisma.user.upsert({
    where: { email: "admin@stickerlab.com" },
    update: {},
    create: {
      email: "admin@stickerlab.com",
      password: hashedPassword,
      name: "Admin",
      role: "admin",
    },
  });

  console.log("✅ Admin user created");
  console.log("🎉 Seed completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
