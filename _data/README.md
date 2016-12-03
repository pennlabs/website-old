# Projects and Biographies

The website adds biographies and projects automatically by grabbing all the data from three files: `projects.yml`, `bios.yml`, and `alum-bios.yml`.

## Projects

1. Open `projects.yml`.
2. Fill out all the fields, ensuring that the `projectname` field starts with a dash (`-`) character. See the Examples section to see how it's done.
3. All projects should have the following information:
   * Project name
   * Link to the project
   * A link nickname – the name of the project that will be mentioned in the description to be also linked to the project. Make this field the same as the `projectname` field if the description simply mentions the project name in full. If the description abbreviates the name (or otherwise alters it), use that as the link nickname (e.g. CFA instead of Common Funding Application). See the examples for reference.
   * Link or path to a picture of the project
   * Brief description of the project
4. Save and make a pull request!

## Biographies for Current Members

1. Open `bios.yml`.
2. Fill out all the fields, ensuring that the `firstname` field starts with a dash (`-`) character. See the Examples section to see how it's done.
3. Current members can add the following information about themselves:
   * First name
   * Last name
   * Link to personal website/portfolio
   * Path or link to a picture of yourself
   * Short biography (1 paragraph long)
4. Save and make a pull request!

## Biographies for Alumni

1. Open `alum-bios.yml`.
2. Fill out all the fields, ensuring that the `firstname` field starts with a dash (`-`) character. See the Examples section to see how it's done.
3. Alumni can add the following information about themselves:
   * First name
   * Last name
   * Path or link to a picture of yourself
   * Where you work now
   * Year you started working at Penn Labs
   * Year you finished working at Penn Labs
4. Save and make a pull request!

## Examples

### Projects

```yaml
- projectname: Common Funding Application
  link: https://penncfa.com
  linknickname: CFA
  image: img/screenshots/cfa.png
  description: CFA is a tool allow student groups across the University to easily request funding for their events to one or more funding sources on campus. Simultaneously, funding groups have the ability to view what groups have applied for funding from them and make approval/denials.
```

### Current Members

```yaml
- firstname: Adam
  lastname: Domingoes
  website: http://www.adamdomingoes.com/
  image: img/bios/adam.jpg
  bio: Adam is a sophomore studying Finance and Computer Science and is Co-Director of Penn Labs. When he’s not hacking in JavaScript, he can be found playing guitar.
```

### Alumni

```yaml
- firstname: Kyle
  lastname: Hardgrave
  image: /img/alumni/kyle.jpg
  work: Medium
  startyear: Spring 2012
  endyear: Spring 2014
```
