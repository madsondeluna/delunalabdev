export interface Opinion {
  id: number;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const opinions: Opinion[] = [
  {
    id: 1,
    slug: "reproducibility-over-novelty",
    title: "why reproducibility matters more than novelty in science",
    date: "2025-03-10",
    readTime: "5 min",
    excerpt:
      "the most impactful scientific contribution i have seen is a well-documented pipeline anyone can reproduce. here is why i now optimize for that first.",
    tags: ["science", "open-source"],
    content: `the most impactful scientific contribution i have seen is a well-documented pipeline anyone can reproduce. here is why i now optimize for that first.

when i started in bioinformatics, i chased novelty. new methods, new tools, new papers. i measured progress by how many things i published or built. that was a mistake.

the real bottleneck in most research groups is not the absence of ideas. it is the absence of results that others can verify and extend. a pipeline no one else can run is not a contribution. it is a dead end.

reproducibility is not a box to check at the end of a project. it is a design principle. it means choosing tools with stable versioning, writing documentation while the code is fresh, and testing on data you did not generate yourself.

the best open-source projects i have read share one trait: someone cared more about the reader than about appearing clever. that is the standard i try to hold myself to now.`,
  },
  {
    id: 2,
    slug: "python-is-not-slow",
    title: "python is not slow. your code is slow.",
    date: "2025-02-18",
    readTime: "4 min",
    excerpt:
      "most performance complaints about python come from not using numpy, pandas, or polars correctly. profiling before rewriting in rust is always the right move.",
    tags: ["python", "performance"],
    content: `most performance complaints about python come from not using numpy, pandas, or polars correctly. profiling before rewriting in rust is always the right move.

i hear this regularly: "python is too slow for our data." then i look at the code and find nested for-loops iterating over dataframe rows, string concatenation inside loops, and no vectorization anywhere.

python the language is slow for pure computation. python the ecosystem is not. numpy operations run at c speed. pandas groupby on millions of rows takes milliseconds. polars handles gigabyte files faster than most custom rust scripts i have seen in the wild.

the rule i follow: profile first. \`cProfile\`, \`line_profiler\`, \`memray\`. find the actual bottleneck. in my experience, 80% of the time it is a single function that a vectorized operation fixes in three lines.

rewriting in rust or c++ is sometimes the right answer. but it is almost never the first answer. and it is never the answer when you have not profiled.`,
  },
  {
    id: 3,
    slug: "cost-of-complexity",
    title: "the real cost of complexity in research software",
    date: "2025-01-30",
    readTime: "6 min",
    excerpt:
      "a script that three people can understand beats an architecture that one person designed. in research, software outlives the people who wrote it.",
    tags: ["software", "research"],
    content: `a script that three people can understand beats an architecture that one person designed. in research, software outlives the people who wrote it.

research software has a specific failure mode that production software does not: the author leaves. graduate students finish their degrees. postdocs move to industry. the person who designed the clever abstraction is no longer available to explain it.

i have inherited codebases where understanding a single function required reading six other files, two papers, and a slack thread from 2021. i have also inherited 200-line scripts that did the same job and took twenty minutes to read start to finish.

the second kind is more valuable. not because simplicity is virtuous in the abstract, but because science depends on verification, and verification depends on comprehension.

complexity has legitimate uses. but in research software, the default should be the simplest thing that works. abstraction should be earned by demonstrated need, not installed preemptively.

when i review code now, the first question i ask is: can a new lab member understand this on their first week? if the answer is no, that is a bug.`,
  },
  {
    id: 4,
    slug: "stop-dreading-the-terminal",
    title: "how i stopped dreading the terminal and started building with it",
    date: "2024-12-05",
    readTime: "7 min",
    excerpt:
      "the command line is not for power users only. it is the fastest path from idea to prototype for anyone working with data or systems.",
    tags: ["unix", "workflow"],
    content: `the command line is not for power users only. it is the fastest path from idea to prototype for anyone working with data or systems.

i avoided the terminal for two years after starting in research. i used gui tools for everything. file managers, spreadsheet applications, even graphical wrappers around command-line programs. this was slower and more fragile than i realized at the time.

the shift happened when i had to process 400 fastq files. no gui tool handled that cleanly. a labmate showed me a one-liner with \`find\`, \`xargs\`, and \`trimmomatic\`. it ran in minutes. i spent the next week learning bash.

the terminal is not a mystical skill. it is a consistent interface for files, processes, and text. once you understand pipes, redirection, and a handful of core utilities, you can compose solutions to problems that no gui anticipates.

the tools that accelerated my learning: \`tldr\` for quick command references, \`fzf\` for fuzzy search, \`tmux\` for persistent sessions on remote servers. none of these are exotic. they are standard equipment.

if you work with data of any kind, the terminal is worth the initial discomfort. the productivity gap between knowing it and not knowing it compounds over time.`,
  },
];
