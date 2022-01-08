/**
 * Defines the properties of items that will be listed within the <nav> element
 * order property is used as the key, it can also be used as the sort
 * value if needed
 */
export interface NavItem {
  title: string;
  link: string; // url
}

/**
 * The collection of {@link navItem}s these will most probably end up on the
 * screen through the <nav> tag
 */
export type NavItems = NavItem[];
