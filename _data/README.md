# Biographies

The website adds biographies automatically by grabbing all the data from two files: `bios.yml` and `alum-bios.yml`.

## Getting Started (for Current Members)

1. Open `bios.yml`.
2. Fill out all the fields, ensuring that the `firstname` field starts with a dash (`-`) character. See the Examples section to see how it's done.
3. Current members can add the following information about themselves:
   * First name
   * Last name
   * Link to personal website/portfolio
   * Path or link to a picture of yourself
   * Short biography (1 paragraph long)
4. Save and make a pull request!

## Getting Started (for Alumni)

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
