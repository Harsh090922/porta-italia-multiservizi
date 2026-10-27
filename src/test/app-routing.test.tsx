import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { SERVICE_DETAILS } from "@/lib/service-details";
import { SERVICES } from "@/lib/site";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it.each(SERVICE_DETAILS)("matches the dedicated service page for $slug", ({ slug }) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const matches = router.matchRoutes(`/servizi/${slug}`);
    expect(matches.at(-1)?.routeId).toBe("/servizi_/$slug");
    expect(matches.at(-1)?.params).toMatchObject({ slug });
  });

  it("links all nine homepage services to their detail content", () => {
    expect(SERVICES.map((service) => service.slug)).toEqual([
      "ambasciate-consolati", "unicom", "carta-blu-mobilita", "comunali",
      "spid", "traduzioni-legalizzazioni", "inps-inail", "caf", "patronato",
    ]);
  });
});
