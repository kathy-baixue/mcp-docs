import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Brain, Code, Database, Github, Globe, MessageSquare, Plug, Terminal, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="inline-block font-bold gradient-text">Model Context Protocol</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Features
              </Link>
              <Link
                href="#tools"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Compatible Tools
              </Link>
              <Link
                href="#docs"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Documentation
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="https://github.com/modelcontextprotocol" target="_blank" rel="noreferrer">
                <Button variant="outline" className="gradient-border">
                  <Github className="h-5 w-5 mr-1" />
                  <span>GitHub</span>
                </Button>
              </Link>
              <Button className="gradient-button" asChild>
                <Link href="#get-started">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text">
                    Connect AI Models to External Services
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Model Context Protocol (MCP) is the standard for connecting Large Language Models to databases,
                    APIs, and other external services.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="gradient-button" size="lg" asChild>
                    <Link href="#get-started">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild className="gradient-border">
                    <Link href="https://github.com/modelcontextprotocol" target="_blank">
                      View on GitHub
                      <Github className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full h-80 overflow-hidden rounded-lg border bg-background/50 backdrop-blur p-2 gradient-border float-animation">
                  <div className="flex h-full w-full items-center justify-center rounded-md bg-muted/50">
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
                        <Brain className="h-8 w-8 text-primary" />
                        <div className="text-center text-sm font-medium">AI Model</div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="h-0.5 w-16 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                        <div className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-3 py-1 text-xs text-white font-medium">
                          MCP
                        </div>
                        <div className="h-0.5 w-16 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                      </div>
                      <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
                        <Database className="h-8 w-8 text-accent" />
                        <div className="text-center text-sm font-medium">External Service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Why use Model Context Protocol?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MCP provides a standardized way for AI models to interact with external services, enabling powerful
                  integrations and capabilities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              <Card className="feature-card gradient-border">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Plug className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Seamless Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Connect any AI model to databases, APIs, and other services with a standardized protocol.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card gradient-border">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Universal Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Works with popular AI tools like Cursor, Claude, Cline, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="feature-card gradient-border">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Enhanced Capabilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enable AI models to query databases, access APIs, and interact with external systems.
                  </p>
                </CardContent>
              </Card>

              {/* Additional feature cards... */}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-medium">
                  Compatible Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Works with your favorite AI tools
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  MCP is supported by a growing ecosystem of AI tools and services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
              {/* Tool Icons */}
              <div className="flex flex-col items-center space-y-4">
                <div className="tool-icon w-24 h-24 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
                  <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="font-medium">Cursor</div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="tool-icon w-24 h-24 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
                  <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <MessageSquare className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <div className="font-medium">Claude Desktop</div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="tool-icon w-24 h-24 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
                  <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <Terminal className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <div className="font-medium">Cline (VS Code)</div>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="tool-icon w-24 h-24 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary p-[2px]">
                  <div className="w-full h-full rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <div className="font-medium">Windsurf (Codium)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm text-secondary font-medium">
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Connect your AI tools to external services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Follow these simple steps to get started with MCP.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl py-12">
              <Tabs defaultValue="postgres" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger
                    value="postgres"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
                  >
                    Postgres
                  </TabsTrigger>
                  <TabsTrigger
                    value="supabase"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
                  >
                    Supabase
                  </TabsTrigger>
                  <TabsTrigger
                    value="custom"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
                  >
                    Custom Server
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="postgres" className="mt-6">
                  <Card className="gradient-border">
                    <CardHeader>
                      <CardTitle>Connect to Postgres Database</CardTitle>
                      <CardDescription>Connect your AI tools to a Postgres database using MCP.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">{/* Installation steps... */}</CardContent>
                  </Card>
                </TabsContent>

                {/* Other tabs content... */}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Documentation
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight gradient-text">
                  Learn more about MCP
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive documentation to learn more about MCP.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="feature-card gradient-border">
                <CardHeader>
                  <CardTitle>Getting Started Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn the basics of MCP and how to set up your first connection.
                  </p>
                  <Button variant="outline" asChild className="w-full gradient-border hover:text-primary">
                    <Link href="#">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="feature-card gradient-border">
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed documentation of the MCP API and protocol specification.
                  </p>
                  <Button variant="outline" asChild className="w-full gradient-border hover:text-primary">
                    <Link href="#">
                      View API Docs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="feature-card gradient-border">
                <CardHeader>
                  <CardTitle>Examples & Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Step-by-step tutorials and example projects using MCP.
                  </p>
                  <Button variant="outline" asChild className="w-full gradient-border hover:text-primary">
                    <Link href="#">
                      Explore Examples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-12 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Model Context Protocol</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <Link href="#" className="hover:text-white hover:underline">
                GitHub
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Documentation
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Community
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white hover:underline">
                Terms of Service
              </Link>
            </div>
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} Model Context Protocol. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

