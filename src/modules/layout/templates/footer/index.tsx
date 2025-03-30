import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  const contactUs = [
    {
      label: "Address:",
      value:
        "Hitler Abi karode Rd, Adaikkakuzhi P.O Kanayakumari Tamil Nadu 629 153",
    },
    {
      label: "Phone number:",
      value: "+91 7092381019",
    },
    {
      label: "Social Media:",
      value: "@topper_manic_ @the_h.itler_abi_ @aji_yazz",
    },
  ]
  return (
    <footer className="border-t border-ui-border-base w-full">
      {/* <div className="pb-[60px]">
        <AboutUs />
      </div> */}
      <div className="content-container flex flex-col w-full border-t border-ui-border-base">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between pt-[70px] pb-[60px]">
          <div>
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-ui-fg-subtle hover:text-ui-fg-base uppercase"
            >
              HitlerAbi Store
            </LocalizedClientLink>
          </div>

          <div className="text-small-regular gap-10 md:gap-x-8 grid grid-cols-2 sm:grid-cols-[repeat(3,minmax(0,250px))]">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">Contact Us</span>
              <ul
                className="grid grid-cols-1 gap-2"
                data-testid="footer-categories"
              >
                {contactUs.map((item, index) => {
                  return (
                    <li
                      className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                      key={index}
                    >
                      <div
                        className={clx(
                          "hover:text-ui-fg-base",
                          "txt-small-plus flex gap-2"
                        )}
                        // href=""
                        // href={`/categories/${c.handle}`}
                        data-testid="category-link"
                      >
                        <p className="!w-[40%]">{item.label}</p>
                        <p className={`w-[60%] ${item.label === "Instagram I’d:" && "break-words"}`}>
                          {item.label === "Instagram I’d:" ? (
                            item.value.split(" ").map((id, i) => 
                              id.startsWith("@") ? (
                                <a 
                                  key={i} 
                                  href={`https://www.instagram.com/${id.slice(1)}`} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-black-500 hover:underline mr-2"
                                >
                                  {id}
                                </a>
                              ) : null
                            )
                          ) : (
                            item.value
                          )}
                        </p>         
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-2"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-2 text-ui-fg-subtle txt-small"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-ui-fg-base",
                            children && "txt-small-plus"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="hover:text-ui-fg-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="txt-small-plus txt-ui-fg-base">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-ui-fg-subtle txt-small",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus txt-ui-fg-base">HitlerAbi</span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small"> */}
            {/* <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    GitHub
                  </a>
                </li> */}
            {/* <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Documentation
                  </a>
                </li> */}
            {/* <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base"
                  >
                    Source code
                  </a>
                </li> */}
            {/* </ul>
            </div> */}
          </div>
        </div>
        <div className="flex w-full mb-6 justify-between text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} HitlerAbi Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
