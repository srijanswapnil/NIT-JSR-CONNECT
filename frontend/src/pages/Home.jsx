import { Button, Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <header className="flex justify-between items-center mb-20">
        <Heading size="6">NIT JSR Freshers Hub</Heading>
        <nav>
          <Flex gap="4">
            <Link to="/login"><Button variant="surface" color="gray">Login</Button></Link>
            <Link to="/signup"><Button variant="solid" color="crimson">Sign Up</Button></Link>
          </Flex>
        </nav>
      </header>

      <main className="grid lg:grid-cols-2 gap-24 items-start">
        <section className="flex flex-col justify-center h-full">
          <Heading size="7" className="mb-8">Start exploring your college now</Heading>
          <Text size="4" className="mb-10 block">
            Your all-in-one platform to navigate through academics, sports, societies, campus news, rumors,
            and much more. Designed specially for freshers of NIT Jamshedpur.
          </Text>
          <div>
            <Link to="/signup">
              <Button size="4" variant="solid" color="crimson">Get Started</Button>
            </Link>
          </div>
        </section>

        <section className="grid gap-10">
          <Card className="bg-zinc-900 p-6">
            <Heading size="4" className="mb-2">Community Market</Heading>
            <Text>Buy, sell, or exchange books, sports gear, or accessories with your college mates.</Text>
          </Card>

          <Card className="bg-zinc-900 p-6">
            <Heading size="4" className="mb-2">Student Insights</Heading>
            <Text>Discover experiences, tips, and hacks shared by your seniors.</Text>
          </Card>

          <Card className="bg-zinc-900 p-6">
            <Heading size="4" className="mb-2">Campus Guide</Heading>
            <Text>From academic blocks to hidden canteens – explore every corner of NITJSR.</Text>
          </Card>

          <Card className="bg-zinc-900 p-6">
            <Heading size="4" className="mb-2">Latest Buzz</Heading>
            <Text>Stay updated with campus events, society activities, and viral rumors.</Text>
          </Card>
        </section>
      </main>
    </div>
  );
}